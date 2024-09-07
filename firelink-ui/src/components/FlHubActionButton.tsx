interface IProps {
  title: string;
  actionFunc: () => void;
}

const FlHubActionButton = ({ title, actionFunc }: IProps) => {
  return <button onClick={actionFunc}>{title}</button>;
};

export default FlHubActionButton;
