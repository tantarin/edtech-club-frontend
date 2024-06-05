"use client";
import React from "react";
import IntroPage from "./pages/Intro";
import { RouteObject, useRoutes } from "react-router-dom";
import { KnowlageItem, mockListItems } from "./constants";

function prepareRoutes(list: KnowlageItem[], parentLink: string = ''): RouteObject[] {
    return list.map((val) => {
        const path = `${parentLink}${val.link}`;
        if (Array.isArray(val.child)) {
            return [
                {
                    path,
                    element: <IntroPage />,
                },
                ...prepareRoutes(val.child, path)]
        }

        return {
            path,
            element: <IntroPage />,
        }
    }
    ).flat();
}

const WikiContent: React.FC = () => {
    const routes = prepareRoutes(mockListItems)

    return useRoutes([
        {
            path: "/",
            element: <IntroPage />,
        },
        ...routes,
        { path: "*", element: <div>No Content</div> },
    ])
}

export default WikiContent;
