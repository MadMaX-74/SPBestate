const showCard = () => {
    const selects = document.querySelectorAll('[data-select="checkbox"]'),
        cards = document.querySelectorAll('.card');

    selects.forEach((select) => {
        if (select.checked && select.value === 'all') {
            cards.forEach((card) => {
                card.style.display = "flex";
            })
        }
        select.addEventListener('click', () => {
            if (select.checked && select.value === 'active') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'active') {
                        card.style.display = "flex";
                    }
                })
            } else if (!select.checked && select.value === 'active') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'active') {
                        card.style.display = "none";
                    }
                })
            }
            if (select.checked && select.value === 'booked') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'booked') {
                        card.style.display = "flex";
                    }
                })
            } else if (!select.checked && select.value === 'booked') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'booked') {
                        card.style.display = "none";
                    }
                })
            }
            if (select.checked && select.value === 'sell') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'sold') {
                        card.style.display = "flex";
                    }
                })
            } else if (!select.checked && select.value === 'sell') {
                cards.forEach((card) => {
                    if (card.dataset.status === 'sold') {
                        card.style.display = "none";
                    }
                })
            }
            if (select.checked && select.value === 'all') {
                cards.forEach((card) => {
                    card.style.display = "flex";
                })
            } else if (!select.checked && select.value === 'all') {
                cards.forEach((card) => {
                    card.style.display = "none";
                })
            }
        })

    })
}

export default showCard;