import React, { useState, useEffect } from "react";

import {getNews, getPublicContent} from "../services/user.service";
import {array} from "yup";
import Card from '@mui/material/Card';

interface IContent{
  content: string;
  date: string;
  header: string;
  id: number;
}
const Home: React.FC = () => {
  const [content, setContent] = useState<IContent[]>([]);
  console.log("home content", content)

  useEffect(() => {
    getNews().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const card = content.map(item => {
    return (
        <div>
          <div>
            <h4>
              {item.header}
            </h4>
          </div>
          <div>
            {item.content}
          </div>
        </div>
    );
  })
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>контент</h3>
      </header>
      <div>
        {card}
      </div>
    </div>
  );
};

export default Home;
