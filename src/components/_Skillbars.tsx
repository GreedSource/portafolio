import SkillBar from "react-skillbars";
export const Skillbars = (): JSX.Element => {
  const skills = [
      {
        type: "Java",
        level: 100,
      },
      {
        type: "React",
        level: 85,
      },
      {
        type: "Javascript",
        level: 75,
      },
      {
        type: "Spring",
        level: 50,
      },
      {
        type: "Docker",
        level: 25,
      },
      {
        type: "HTML",
        level: 20,
      },
      {
        type: "NoSQL",
        level: 0,
      },
    ],
    colors = {
      bar: "#80C804",
      title: {
        text: "#fff",
        background: "#80c904",
      },
    };

  return <SkillBar skills={skills} colors={colors} />;
};

export default Skillbars;
