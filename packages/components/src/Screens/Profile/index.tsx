import React, { useEffect, useState } from "react";

import Layout from "../../Layout";
import Loading from "../../Loading";
import MenuBar from "../../MenuBar";
import Header from "./Header";
import IconButtons from "./IconButtons";
import NotificationText from "./NotificationText";
import Activities from "./Activities";

import { API_URL } from "../../utils";

type Props = {
  token: string;
};

export default ({ token }: Props) => {
  const [data, setData] = useState();
  const getMe = async () => {
    try {
      const response = await fetch(API_URL + "/core/me", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      if (response.status !== 200) throw response;
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMe();
  }, []);

  if (!data) return <Loading />;

  return (
    <Layout>
      <MenuBar />
      <Header name={data.name} picture={data.picture} />
      <IconButtons />
      <NotificationText />
      <Activities />
    </Layout>
  );
};
