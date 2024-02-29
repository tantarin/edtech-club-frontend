import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { getAds } from "../../services/user.service";
import { Link } from "react-router-dom";
import IUser from "../../types/user.type";
import { getCurrentUser } from "../../services/auth.service";
import clsx from "clsx";

interface AdData {
    id: bigint;
  header: string;
  content: string;
}

const AdsPage: React.FC = () => {
  const [content, setContent] = useState<AdData[]>([]);
  const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

  const loadAds = () => {
    getAds().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          const errorId = error.response ? error.response.data.id : null;
          setContent([{ id: errorId, header: "Error", content: _content }]);
      }
    );
  };

  useEffect(() => {
    loadAds();
  }, []);

  const Ad: React.FC<AdData> = ({ id, header, content }) => {
    return (
      <div className={clsx("root", "border border-gray rounded-[10px]")}>
        <a
            className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg"
            href=""
        >
  <span
      className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

          <div className="justify-between sm:flex">
            <div>
              <h5 className="text-xl font-bold text-slate-900">
                {header}
              </h5>
              <p className="mt-1 text-xs font-medium text-slate-600">By Ana Doe</p>
            </div>

            <div className="flex-shrink-0 hidden ml-3 sm:block">
              <img
                  className="object-cover w-16 h-16 rounded-lg shadow-sm"
                  src={`https://github.com/creativetimofficial/argon-design-system/blob/master/assets/img/faces/team-${id}.jpg?raw=true`}
                  alt=""
              />
            </div>
          </div>

          <div className="mt-4 sm:pr-8">
            <p className="text-sm text-slate-500">
              {content}
            </p>
          </div>

          <dl className="flex mt-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-slate-600">Опубликовано</dt>
              <dd className="text-xs text-slate-500">31st June, 2022</dd>
            </div>
          </dl>
        </a>
      </div>
    );
  };

  return (
    <div className="container mt-3">
      <Container>
        <div className="gap-4 flex flex-col mt-2">
          {user?.roles && user.roles.includes("ROLE_ADMIN") && (
            <Link to="/addAds" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" sx={{ height: 50 }}>
                Добавить объявление
              </Button>
            </Link>
          )}
          <div className="grid grid-cols-1 gap-4">
            {Array.isArray(content) &&
              content?.map((ad, index) => <Ad key={index} {...ad} />)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdsPage;
