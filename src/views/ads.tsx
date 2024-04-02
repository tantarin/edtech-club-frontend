import React, {useEffect, useState} from 'react';
import SingleAd from "../components/Ads/SingleAd";
import {deleteAd} from "../services/ads.service";
import {getAds} from "../services/user.service";
import {Link} from "react-router-dom";
import {Container, Button} from "@mui/material";


interface AdData {
    id: number;
    header: string;
    content: string;
    tags: string[];
}

const Ads: React.FC = () => {
    const [content, setContent] = useState<AdData[]>([]);
    const [error, setError] = useState<string | null>(null); // Стейт для отображения ошибки
    const [categories, setTags] = useState(["Frontend", "Backend", "Fullstack", "UXUI", "Marketing"]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Исправлен тип для selectedCategories
    const [filteredAdsList, setFilteredAdsList] = useState<AdData[]>([]); // Переименована переменная и изменен тип

    const loadAds = () => {
        getAds().then(
            (response) => {
                console.log("!!!!")
                console.log(response.data)
                setContent(response.data);
                setFilteredAdsList(response.data);
            },
            (error) => {
                console.error("Error:", error.message);
                setError(error.toString());
            }
        );
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteAd(id);
            setContent(prevContent => prevContent.filter(ad => ad.id !== id));
            setFilteredAdsList(prevContent => prevContent.filter(ad => ad.id !== id)); // Удаление объявления из отфильтрованного списка
            console.log("Ad deleted successfully");
        } catch (error) {
            console.error("Error deleting ad:", error);
        }
    };

    const addCategory = (category: string) => {
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

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredAdsList(content); // Если не выбрано ни одной категории, показываем все объявления
        } else {
            setFilteredAdsList(content.filter((item) => (
                item.tags.some(tag => selectedCategories.includes(tag))
            ))); // Фильтруем объявления по тегам: если хотя бы один тег из выбранных входит в массив тегов объявления, оно проходит фильтрацию
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
                        <div className='w-full h-[90%] rounded-md bg-transparent'>
                            <div className='relative w-full h-[15%] flex items-center overflow-x-auto'>
                                <span className='mx-2 ml-0 font-medium'> Фильтр по категориям: </span>
                                {categories.map((category) => (
                                    <div
                                        onClick={() => {
                                            if (selectedCategories.includes(category)) {
                                                removeCategory(category);
                                            } else {
                                                addCategory(category);
                                            }
                                        }}
                                        className={`w-fit min-w-fit h-8 mx-2 px-5 py-2 flex flex-row justify-center items-center text-sm border break-keep rounded-3xl cursor-pointer transition-all duration-300 ${(selectedCategories.includes(category)) ? 'border-blue-500 bg-blue-200 text-white' : ' border-gray-500 bg-blue-200 text-gray-900'} `}>
                                        {category}
                                    </div>
                                ))}
                            </div>
                        </div>
                            <div className="grid grid-cols-1 gap-4">
                                {filteredAdsList.map((ad, index) => <SingleAd key={index} id={ad.id} header={ad.header} content={ad.content} tags={ad.tags} handleDelete={handleDelete} />)}
                            </div>
                </div>
            </Container>
        </div>
    )
}

export default Ads;
