import React, {useEffect, useState} from 'react';
import SingleAd from "../components/Ads/SingleAd";
import {deleteAd} from "../services/ads.service";
import {getAds} from "../services/user.service";
import {Link} from "react-router-dom";
import {Container, Button} from "@mui/material";

interface AdData {
    id: bigint;
    header: string;
    content: string;
    category: string; // Добавлена категория для объявления
}

const Ads: React.FC = () => {
    const [content, setContent] = useState<AdData[]>([]);
    const [categories, setCategories] = useState(["Java", "Python", "Тестирование", "React"]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Исправлен тип для selectedCategories
    const [filteredAdsList, setFilteredAdsList] = useState<AdData[]>([]); // Переименована переменная и изменен тип

    const loadAds = () => {
        getAds().then(
            (response) => {
                setContent(response.data);
                setFilteredAdsList(response.data);
            },
            (error) => {
                console.error("Error2:", error.message);
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                // const errorId = error.response ? error.response.data.id : null;
                const errorId = null;
                setContent([{id: BigInt(1), header: "Error", content: _content, category: "Java"}]);
            }
        );
    };

    const handleDelete = async (id: bigint) => {
        try {
            await deleteAd(id);
            setContent(prevContent => prevContent.filter(ad => ad.id !== id));
            setFilteredAdsList(prevContent => prevContent.filter(ad => ad.id !== id)); // Удаление объявления из отфильтрованного списка
            console.log("Ad deleted successfully");
        } catch (error) {
            console.error("Error deleting ad:", error);
        }
    };

    const addCategory = (category: string) => { // Указание типа для параметра
        if (!selectedCategories.includes(category)) {
            setSelectedCategories(prev => ([...prev, category]))
        }
    }

    const removeCategory = (category: string) => { // Указание типа для параметра
        if (selectedCategories.includes(category)) {
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const resetCategory = () => {
        setSelectedCategories([]);
    }

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredAdsList(content); // Установка отфильтрованного списка в начальное значение при сбросе категорий
        } else {
            setFilteredAdsList(content.filter((item) => (selectedCategories.includes(item.category))));
        }
    }, [selectedCategories, content]);

    useEffect(() => {
        loadAds();
    }, []);

    return (
        <div className="container mt-3">
            <Container>
                <div className="gap-4 flex flex-col mt-2">
                    {(
                        <Link to="/addAds" style={{textDecoration: "none"}}>
                            <Button variant="contained" color="primary" sx={{height: 50}}>
                                Добавить объявление
                            </Button>
                        </Link>
                    )}
                        <div className='w-full h-[90%] rounded-md bg-white'>
                            <div className='relative w-full h-[15%] flex items-center overflow-x-auto'>
                                <span className='mx-3 ml-5 font-medium'> Фильтр по категориям: </span>
                                {categories.map((category) => (
                                    <div
                                        onClick={() => {
                                            if (selectedCategories.includes(category)) {
                                                removeCategory(category);
                                            } else {
                                                addCategory(category);
                                            }
                                        }}
                                        className={`w-fit min-w-fit h-8 mx-2 px-5 py-2 flex flex-row justify-center items-center text-sm border break-keep rounded-3xl cursor-pointer transition-all duration-300 ${(selectedCategories.includes(category)) ? 'border-blue-500 bg-blue-500 text-white' : ' border-gray-500 bg-white text-gray-900'} `}>
                                        {category}
                                    </div>
                                ))}
                                <div
                                    onClick={() => resetCategory()}
                                    className={`${(selectedCategories.length > 0) ? 'opacity-100' : 'opacity-0 pointer-events-none'} sticky right-0 w-fit h-full px-5 flex justify-center items-center text-blue-500 bg-white backdrop-blur-lg cursor-pointer hover:text-blue-700 transition-all duration-300`}
                                >
                                    clear
                                </div>
                            </div>
                        </div>
                            <div className="grid grid-cols-1 gap-4">
                                {content.map((ad, index) => <SingleAd key={index} {...ad}
                                                                              handleDelete={handleDelete}/>)}
                            </div>
                </div>
            </Container>
        </div>
    )
}

export default Ads;
