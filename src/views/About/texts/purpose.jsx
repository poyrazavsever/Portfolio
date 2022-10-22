import React from 'react'
import {useSelector} from "react-redux"

function Purpose() {

    const count = useSelector((state) => state.counter.language)

    return (
        <p className='abouttext'>
            {count === "en" ? "My primary goal is to get somewhere in my software life and to be a qualified employee. After seeing how things work in teamwork, I want to establish my own company and offer useful work to people. Although all my current studies are in this direction, I am aware that I need to work more disciplined. I hope to be a qualified software developer in the position I want in the future." : "Öncelikli hedefim yazılım hayatımda bir yerlere gelmek ve nitelikli bir çalışan olmak. Takım çalışmasında işlerin nasıl yürüdüğünü gördükten sonra kendi şirketimi kurmak ve insanlara faydalı işler sunmak istiyorum. Mevcut tüm çalışmalarım bu yönde olsa da daha disiplinli çalışmam gerektiğinin farkındayım. İleride istediğim pozisyonda kalifiye bir yazılımcı olmayı umuyorum."}
            
        </p>
    )
}

export default Purpose