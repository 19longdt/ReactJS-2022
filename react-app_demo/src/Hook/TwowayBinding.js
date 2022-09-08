import { useState } from 'react'


const gifts = ['1$', '2$', '3$'];

const courses = [
    {
        id: 1,
        name: 'longdo'
    },
    {
        id: 2,
        name: 'longdo1'
    },
    {
        id: 3,
        name: 'longdo2'
    }
]

function TwowayBinding() {
    // {/* Two-way Binding | Hook */ }

    const [gift, setGift] = useState();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [checked, setChecked] = useState(1);
    const [checked1, setChecked1] = useState([]);

    
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? [];
    });

    const randomGift = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)]);
    };

    const handleSubmit = () => {
        console.log({
            name, email
        });
    };

    const handleRegister = () => {
        console.log({ id: checked });
    };

    const handleChecked = (id) => {
        setChecked1(prev => {
            const isChecked = checked1.includes(id);

            if (isChecked) {
                return checked1.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    const handleRegister2 = () => {
        console.log({ id: checked1 });
    };

    const handleAdd = () => {
        setJobs(prev => {
            const jobsTmp = [...prev, job];

            const jsonJobs = JSON.stringify(jobsTmp);
            localStorage.setItem('jobs', jsonJobs);

            return jobsTmp;
        });
        setJob('');
    };

    return (
        <div style={{ padding: 30 }}>
            <h1>{gift || 'có làm thì mới có ăn'}</h1>
            <button onClick={randomGift}>làm đê</button>

            <br></br>
            <br></br>

            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

            <br></br>
            <br></br>

            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)}
                    />{course.name}
                </div>
            ))}
            <button onClick={handleRegister}>Register</button>
            <br></br>

            {courses.map(course1 => (
                <div key={course1.id}>
                    <input
                        type="checkbox"
                        checked={checked1.includes(course1.id)}
                        onChange={() => handleChecked(course1.id)}
                    />{course1.name}
                </div>
            ))}
            <button onClick={handleRegister2}>Register2</button>

            <br></br>
            <br></br>
            <br></br>

            <input
                onChange={e => setJob(e.target.value)}
                value={job}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>

        </div>
    );

}

export default TwowayBinding;
