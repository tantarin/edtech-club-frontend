"use client";
import React from "react";
import WikiNavSearch from "../features/wiki/components/WikiNavSearch";
import WikiNav from "../features/wiki/components/WikiNav";
import WikiContent from "../features/wiki/wiki";
import { Link } from "react-router-dom";
import { FilterContextPropvider } from "../features/wiki/context/FIlterContext";

import styles from './wiki.module.css'

const WikiPage: React.FC = () => {
    return (
        <div className="bg-white flex h-full">
            <div className={styles.sidebarContainer}>
                <div className="flex items-center px-3 pt-2">
                    <Link to='/wiki'>
                        <h2 className="text-xl font-bold">База знаний</h2>
                    </Link>
                </div>
                <FilterContextPropvider>
                    <WikiNavSearch />
                    <WikiNav />
                </FilterContextPropvider>
            </div>

            <div className="container mx-auto overflow-auto">
                <WikiContent />
            </div>
        </div>
    );
}

export default WikiPage;
