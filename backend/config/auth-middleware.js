import { app } from "../firebase/admin.js";

const authMiddleware = (request, response, next) => {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.status(401).send({ message: "No token provided" });
    }

    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        return response.status(401).send({ message: "Invalid token" });
    }

    const token = headerToken.split(" ")[1];

    app
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            // Add the user to the request object
            request.user = decodedToken;

            // Continue with the request
            next();
        })
        .catch(() => response.status(403).json({ message: "Could not authorize" }));
}

export default authMiddleware;