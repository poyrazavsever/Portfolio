import React from 'react'
import { useSelector } from "react-redux"

function WhySoftware() {

    const count = useSelector((state) => state.counter.language)
    return (
        <p className='abouttext'>
            {count === "en" ? " I believe that software is the best way to do things that are impossible or very difficult for people to do in daily life. At the same time, based on my past experiences, I decided that the software was the right decision for me. From the day I started my research, I realized that everything related to computer-software is in my field of interest and that I enjoy hearing and reading about them. And after much thought, I decided to continue my life in this business." : "İnsanların günlük hayatta yapması çok zor olan şeyleri yapmanın en iyi yolunun yazılım olduğuna inanıyorum. Aynı zamanda geçmiş deneyimlerime dayanarak yazılımın benim için doğru karar olduğuna karar verdim. Araştırmaya başladığım günden itibaren bilgisayar-yazılım ile ilgili her şeyin ilgi alanımda olduğunu ve bunları duymaktan ve okumaktan keyif aldığımı fark ettim. Ve uzunca süren düşünmelerden sonra hayatımı bu iş ile sürdürmeye karar verdim."}
           
        </p>
    )
}

export default WhySoftware