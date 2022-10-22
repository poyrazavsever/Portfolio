import React from 'react'
import { useSelector } from "react-redux"

function Started() {

    const count = useSelector((state) => state.counter.language)

    return (
        <p className='abouttext'>

            {count === "en" ? "When I first got my computer, I decided to play GTA 5 with a friend. We bought GTA5 and played for a while. But it was very difficult to make money in the game, to buy something. As such, we slowly started to cool off from the game. It's been a long time and I saw the game in my library. And I started to think about how to start the game again. After thinking about it for a while, it occurred to me to cheat. I searched youtube for the GTA5 cheat. And I followed the instructions in the first video. Although I don't believe it, the cheat worked! I was surprised by this. I started researching how these cheats came about and how they were done. That's how I met software." : "Bilgisayarımı ilk aldığımda bir arkadaşımla GTA 5 oynamaya karar vermiştim. GTA5 aldık ve bir süre oynadık. Ama oyunda para kazanmak, bir şeyler satın almak çok zordu. Hal böyle olunca da yavaş yavaş oyundan soğumaya başladık. Uzun zaman oldu ve oyunu kütüphanemde gördüm. Ve tekrar oyuna nasıl başlayacağımı düşünmeye başladım. Bir süre düşündükten sonra hile yapmak aklıma geldi. GTA5 hilesi için youtube'da arama yaptım. Ve ilk videodaki talimatları uyguladım. İnanmasam da, hile işe yaradı! Buna şaşırdım. Bu hilelerin nasıl ortaya çıktığını ve nasıl yapıldığını araştırmaya başladım. Yazılımla böyle tanıştım."}
            
        </p>
    )
}

export default Started