import Card from '../UI/Card/Card'
import styles from './SkillsSection.module.css'
import Skill from '../Skill/Skill.jsx'

export default function SkillsSection({skills, setSkills}) {
    return(
        <Card background={'#CBF2B8CC'}>
            <div className={styles.wrapper}>
                <span>ДАТА</span>
                <span>НАВЫК</span>
            </div>
            {skills && skills.map(skill => <Skill key={skill.id} skills={skills} skill={skill} setSkills={setSkills}/>)}
        </Card>
    )
}