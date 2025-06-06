import "./AcordeonItem.css";
export const AcordeonItem = (props) => {
  const { setValue, handClickFu, title, content, indexNum } = props;
  return (
    <div onClick={() => handClickFu(indexNum)} className="Acordeon-Cont">
      <h4 className={setValue === indexNum ? "title" : null}>{title}</h4>
      {setValue === indexNum ? <p>{content}</p> : null}
    </div>
  );
};
