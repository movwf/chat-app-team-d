import React, {memo} from 'react'
import styles from "../Room.module.css";

function RoomHeader({title}) {
  return (
    <div className={styles.RoomHeader}>
    <span className={styles.RoomTitle}>{title}</span>
  </div>
  )
}

export default memo(RoomHeader);
