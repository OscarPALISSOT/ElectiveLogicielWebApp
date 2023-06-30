import style from "./InputFile.module.css";
import React from "react";


interface InputFileProps {
    id: string;
}

const InputFile: React.FC<InputFileProps> = ({id}: InputFileProps) => {

    return (
        <>
            <input id={id} name={id} className={style.inputFile} type="file" />
        </>
    )
}


export default InputFile;