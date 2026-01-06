import React from "react";

type Props = { params: Promise<{ prodId: string }> };

const page = async (props: Props) => {
  const { prodId } = await props.params;
  return <div>page for {prodId}</div>;
};

export default page;
