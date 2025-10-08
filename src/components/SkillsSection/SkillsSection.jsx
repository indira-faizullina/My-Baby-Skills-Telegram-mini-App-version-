import Card from '../UI/Card/Card'
import styles from './SkillsSection.module.css'
import { skills } from '../../../data.js'
import Skill from '../Skill/Skill.jsx'

export default function SkillsSection() {
    return(
        <Card background={'#CBF2B8CC'}>
            <div className={styles.wrapper}>
                <span>ДАТА</span>
                <span>НАВЫК</span>
            </div>
            {skills.map(skill => <Skill key={skill.title} data={skill}/>)}
        </Card>
    )
}