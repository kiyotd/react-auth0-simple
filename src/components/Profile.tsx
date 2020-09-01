import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile: React.FC = () => {

  const {user, isAuthenticated} = useAuth0();
  const [authMethod, setAuthMethod] = useState<string | null>(null);

  useEffect(() => {

    if (isAuthenticated) {

      //認証方法の取得・設定
      const subArr = user.sub.split("|");
      if (subArr.length == 2){
        setAuthMethod(subArr[0]);
      }
    }
  }, [isAuthenticated]);

  return (
    isAuthenticated && (
      <div>
        <p>{authMethod}で認証してログイン中</p>
        <h2>こんにちは、{user.nickname} さん</h2>
        <img src={user.picture} alt={user.nickname} width="48" height="48"/>
        <JSONPretty data={user}/>
      </div>
    ));
};

export default Profile;
