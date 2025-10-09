import Card from '../UI/Card/Card'
import Form from '../UI/Form/Form'

export default function FormSection({skills, setSkills}) {

    return(
        <Card background={'#DFC5E8CC'} borderColor={'#9ddb7eff'}>
            <h3>НОВАЯ УМЕЛКА</h3>
            <Form skills={skills} setSkills={setSkills}/>
        </Card>
    )
}