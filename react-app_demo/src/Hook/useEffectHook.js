import { useEffect, useState } from 'react'
let timer;
const tabs = ['posts', 'comments', 'album'];
function useEffectHook() {

    // 1. useEffect(callback)
    //  1.1. gọi callback mỗi khi component re-render
    //  1.2. gọi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback, [])
    //  2.1. chỉ gọi callback 1 lần sau khi component mounted
    // 3. useEffect(callback, [deps])
    //  3.1. callback sẽ được gọi lại mỗi khi dependence thay đổi

    // I. Update DOM (title web)

    const [title, setTitle] = useState('');
    useEffect(() => {
        document.title = title;
    })

    // II. Call API, useEffect with dependencies
    const [type, setType] = useState('posts');

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type]);


    // III. Listen DOM Event

    const [showGoTop, setShowGoTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const hanleScroll = () => {
            // if(window.scrollY){
            //     setShowGoTop(true);
            // }else{
            //     setShowGoTop(false);
            // }

            setShowGoTop(window.scrollY >= 400);
        }

        window.addEventListener('scroll', hanleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', hanleScroll);
        };
    }, []);

    useEffect(() => {
        const handlerResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        };
    }, []);

    // IV. with Timer functions

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if(countdown === 0){
        clearInterval(timer);
    }

    //V. useEffect() with preview image

    const [imgFile, setimgFile] = useState();

    useEffect(() => {
        return () => {
            imgFile && URL.revokeObjectURL(imgFile.preview);
        };
    }, [imgFile]);

    const handlePreviewImg = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setimgFile(file);
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewImg}
            />
            {imgFile && <img src={imgFile.preview} width="50%" height="50%" />}
            <br></br>
            <label>Countdown: {countdown}</label>
            <br></br>
            <label>Window width: {width}</label>
            <br></br>
            <br></br>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <br></br>
            <br></br>

            <label>Change title </label>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}

                {showGoTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20
                        }}
                    >
                        Go top</button>
                )}
            </ul>
        </div>
    );
}

export default useEffectHook;