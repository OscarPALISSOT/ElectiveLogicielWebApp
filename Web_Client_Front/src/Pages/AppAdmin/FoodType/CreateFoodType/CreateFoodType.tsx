import InputField from "../../../../Components/InputField/InputField.tsx";
import InputFile from "../../../../Components/InputFile/InputFile.tsx";
import Btn from "../../../../Components/Btn/Btn.tsx";


function CreateFoodType() {

    return (
        <>
            <h1>Ajouter une catégorie de restaurant.</h1>

            <InputField placeholder={'Catégorie'} name={'foodTypeLabel'} required style={'primary'} radius={'smooth'}/>

            <h2>Icon</h2>
            <InputFile id={'foodTypeIcon'}/>
            <Btn />
        </>
    )
}

export default CreateFoodType
