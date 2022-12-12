import React from 'react';
import map from "../../assets/home-page/map.svg";
import Image from "next/image";

const ClientsGeography = () => {
    return (
        <div className={"clientsGeography section"}>
            <h2 className={"pageTitle"}>our Clients geography</h2>
            <div className={"container"}>
                <Image src={map} alt={"Map"}/>
            </div>
        </div>
    );
};

export default ClientsGeography;