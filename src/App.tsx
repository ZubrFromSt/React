import React, {FC, useState} from 'react';
import './App.css';
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import {IPost} from "./models/IPost";
import {getPostOfUser} from "./services/user.api.service";

const App: FC = () =>{

  const [posts, setPosts] = useState<IPost[]>([])

  const clickHandler = async (id: number) => {
    setPosts(await getPostOfUser(id));
  }
  return (
      <>
        <hr/>
        <div><Posts posts={posts}/></div>
        <Users clickHandler={clickHandler}/>
      </>
  );

}

export default App;
