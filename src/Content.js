const Content = ({ parts }) => {
  return parts.map(part => {
    return <p>{part.part} {part.exercises}</p>
  });
};

export default Content;