
const LessonAbout = ({title, text}) => {

  return (

          <div className="about">
            <h2 className="mt-2">{title}</h2>
            <p className="ptb-1">
              {text}
            </p>
          </div>
  );
};

export default LessonAbout;
