import { useState, useEffect } from "react"

export default function Main({ darkMode }) {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomImage = allMemes[randomIndex]

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomImage.url
        }))
    }

    function handleChange(event) {
        const { value, name } = event.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className={darkMode ? "main dark" : "main"}>
            <div className={darkMode ? "form dark" : "form"}>

                <label htmlFor="topText">
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label htmlFor="bottomText">
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>

                <button onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className={darkMode ? "meme dark" : "meme"}>
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
