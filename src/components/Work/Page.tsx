import React, { Fragment } from "react";
import styled from "styled-components";
import works, { workType } from "~/data/works";
import { NotFount, Header, Contents } from ".";

type Props = {
  className?: string;
  name: string;
}

const Component: React.FC<Props> = (props) => {
  const { className, name } = props;
  const [work, setWork] = React.useState<workType | undefined>(() => {
    return works.find(e => e.name.toLowerCase() === name);
  });
  const Page = work && (
    <Fragment>
      <Header />
      <Contents work={work} />
    </Fragment>
  )

  return (
    <div className={className}>
      {!work ? <NotFount name={name} /> : Page}
    </div>
  )
}

export default styled(Component)``;