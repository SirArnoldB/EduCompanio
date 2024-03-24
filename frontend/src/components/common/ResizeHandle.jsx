import { PanelResizeHandle } from "react-resizable-panels";
import Proptypes from "prop-types";

import styles from "../../css/panel.module.css";

const ResizeHandle = ({ className = "", id }) => {
  return (
    <PanelResizeHandle
      className={[styles.ResizeHandleOuter, className].join(" ")}
      id={id}
    >
      <div className={styles.ResizeHandleInner}>
        <svg className={styles.Icon} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
          />
        </svg>
      </div>
    </PanelResizeHandle>
  );
};

ResizeHandle.propTypes = {
  className: Proptypes.string,
  id: Proptypes.string,
};

export default ResizeHandle;
