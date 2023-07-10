import { FC } from "react";

export interface IBaseTemplateProps {
  stringProps: string;
}

const BaseTemplate: FC<IBaseTemplateProps> = ({ stringProps }) => {
  return <div className={`bg-sbSuccess dark:bg-sbGray px-5 py-5 text-white`}>{stringProps}</div>;
};

export default BaseTemplate;
