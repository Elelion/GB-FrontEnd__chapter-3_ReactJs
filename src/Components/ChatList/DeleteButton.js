import {useCallback} from "react";

export const DeleteButton = ({id, onClick}) => {
  const handleClick = useCallback(() => {
      onClick(id)
    },
    [onClick, id],
  );

  return (
    <div onClick={handleClick} style={{marginLeft: '10px', cursor: 'pointer'}}>
      del
    </div>
  )
}
