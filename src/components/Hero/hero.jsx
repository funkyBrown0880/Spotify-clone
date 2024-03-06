import style from'./hero.module.css'
export const Hero = () => {
    return (
        <main>
        <section className={style.premiumDiscount}>
            <h2 className={style.title}>Get Premium free for 1 month</h2>
            <p className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className={style.buttonGroup}>
            <button className='btn'>Get started</button>
            <button className='btn-outline'>See other plans</button>
            </div>
            
            <p className={style.terms}><a href='#terms'>Terms and conditions apply.</a>1 month free not available for users who have already tried Premium.</p>
        </section>
    </main>
    )
}