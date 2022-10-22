import React from 'react'
import {useSelector} from "react-redux"

function Learn() {

    const count = useSelector((state) => state.counter.language)
    return (
        <p className="abouttext">
            {count === "en" ? "First of all, I want to talk about something. What I am about to say is not for those who have no idea about software or for beginners. I don't believe you can get anywhere by just watching plain video listings or doing nothing while trying to learn about the software. I think if you want to learn something you should do a project about it or with it. You should learn to research on the internet and find solutions for the places you can't do or the errors you get. As long as this situation continues, both logic will be understood and memorization will be avoided. That's how I learn too." : "Öncelikle bir konudan bahsetmek istiyorum. Söyleyeceklerim, yazılım hakkında hiçbir fikri olmayanlar veya yeni başlayanlar için değil. Sadece düz video listelerini izleyerek veya yazılım hakkında bilgi edinmeye çalışırken hiçbir şey yapmadan bir yere varabileceğinizi düşünmüyorum. Bence bir şey öğrenmek istiyorsan onunla ilgili ya da onunla bir proje yapmalısın. Yapamadığınız yerler veya aldığınız hatalar için internetten araştırma yapmayı ve çözüm bulmayı öğrenmelisiniz. Bu durum devam ettiği sürece hem mantık anlaşılacak hem de ezberden kaçınılacaktır. Ben de böyle öğreniyorum."}
            
        </p>
    )
}

export default Learn