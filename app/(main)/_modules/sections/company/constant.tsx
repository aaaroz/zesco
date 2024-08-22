import {
  AndroidFilled,
  AppleFilled,
  CodepenSquareFilled,
  CodeSandboxSquareFilled,
  FacebookFilled,
  GithubFilled,
  GitlabFilled,
  WindowsFilled,
} from "@ant-design/icons";

type stacksProps = {
  [key: string]: JSX.Element;
};

const className = "text-primary-foreground text-4xl";

export const STACKS: stacksProps = {
  apple: <AppleFilled className={className} />,
  android: <AndroidFilled className={className} />,
  github: <GithubFilled className={className} />,
  windows: <WindowsFilled className={className} />,
  gitlab: <GitlabFilled className={className} />,
  facebook: <FacebookFilled className={className} />,
  codesandbox: <CodeSandboxSquareFilled className={className} />,
  codepen: <CodepenSquareFilled className={className} />,
};
