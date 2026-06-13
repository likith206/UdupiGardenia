document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Animation
    const loader = document.getElementById("loader");
    setTimeout(() => {
        if(loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 1000);

    // WhatsApp link logic
    const whatsappNumber = '919449184659';
    const defaultMessage = encodeURIComponent("Hello! I'd like to place an order/make an enquiry.");
    const whatsappLinks = document.querySelectorAll('.whatsapp-btn');
    
    whatsappLinks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
        });
    });

    // Menu Data
    const menuData = [
    {
        "category": "Breakfast",
        "items": [
            {
                "name": "Idly (2)",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Idly (2) Vada (1)",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Vada (1)",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Idly (3)",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Idly (1) Vada (1)",
                "price": 75,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Khara Bath",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kesari Bath",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chow Chow Bath",
                "price": 110,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rava Idly",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pudeena Rava Idly",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Sabbakki Rava Idl",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Vegetable Rava Idly",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mini Idly",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Thatte Idly (1)",
                "price": 40,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Poori",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Curd Vada",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Ghee Podi Tatte Idly",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rice Bath",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Bisibelebath",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Ghee Pongal",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Curd Rice",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Bread Pulav",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Millet Belebath",
                "price": 90,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Combo Mini Breakfast",
        "items": [
            {
                "name": "Mini Masala, Mini Idly Vada, Mini Khara Bath Kesari Bath, Mini Rice Bath",
                "price": 150,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Variety Dosa",
        "items": [
            {
                "name": "Ghee Podi Masala Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Ghee Masala Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Masala Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Plain Dosa",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Masala Dosa",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Onion Dosa",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Set Dosa",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rava Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rava Onion Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paper Plain Dosa",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paper Masala Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rava Masala Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Open Butter Masala Dosa",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paper Butter Masala Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Today Special Dosa",
        "items": [
            {
                "name": "Pizza Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Masala Dosa",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Masala Dosa",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Palak Masala Dosa",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Neer Dosa",
                "price": 110,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cheese Masala Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Vegetable Dosa",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Raagi Dosa",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Special Dosa",
                "price": 150,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Lunch",
        "items": [
            {
                "name": "South Indian Meals",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "North Indian Meals",
                "price": 220,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Papad",
        "items": [
            {
                "name": "Fried Papad",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Roasted Papad",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Masala Papad",
                "price": 80,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Chinese Starters",
        "items": [
            {
                "name": "Gobi Manchurian",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Gobi 65",
                "price": 190,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Gobi Chilly",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Gobi Papper Fry",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Baby Corn Manchurian",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Baby Corn 65",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Baby Corn Chilly / Papper",
                "price": 230,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Manchurian",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Chill",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom 65",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Paper Day",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Kabab",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Manchurian",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Chilly",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer 65",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Kabab",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Pepper Dry",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Manchurian",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Aloo Manchurian",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "French Fries",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Spring Roll",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Kurkure",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Chatpat",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Lemon Panner",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Crispy Corn",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cheese Corn Vada",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mix Veg Pakoda",
                "price": 150,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Onion Pakoda",
                "price": 100,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Soup",
        "items": [
            {
                "name": "Tomato Soup",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Sweet Corn Soup",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Hot & Sure Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Manchow Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Clear Soup",
                "price": 110,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Lang Pang Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Spicy Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "French Onion Soup",
                "price": 150,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Noodles Soup",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Ginger Soup",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Lemon Coriander Soup",
                "price": 100,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Salad",
        "items": [
            {
                "name": "Green Salad",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cucumber Salad",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Tomato Salad",
                "price": 80,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "North Starters",
        "items": [
            {
                "name": "Paneer Lollipop",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Lollipop",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Platter",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Finger Fry",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Harabhara Kabab",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Tikka",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Tikka",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Sheek Kabab",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Sheek Kabab",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Paneer Sheek Kabab",
                "price": 270,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Baby Corn Finger Fry",
                "price": 220,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Special Gravy",
        "items": [
            {
                "name": "Hariyali Kofta",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Koftra",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Kofta",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Spl. Kofta",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Paneer Pasand",
                "price": 360,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Sagvali",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Patiyala",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Spl. Gravy",
                "price": 310,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Tikka Masala",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Tikka Masala",
                "price": 300,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Navarathna Kurma (sweet)",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Spl. Sizlar",
                "price": 290,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "North India Curry",
        "items": [
            {
                "name": "Kaju Masala",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Butter Masala",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Masala",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Kollapori",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Hydrabadi",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Malai Kofta",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Paneer Masala",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Burji",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mix Veg Curry",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Shahi Kurma",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dum Aloo Punjabi",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dum Aloo Kashmiri",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kadai Vegetable",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kadia Paneer",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kadai Mushroom",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kadai Baby Corn",
                "price": 230,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dal Fry",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dal Tadka",
                "price": 190,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Palak Paneer",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Plain Palak",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Shahi Paneer",
                "price": 230,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dal Palak",
                "price": 190,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Kolhapuri",
                "price": 250,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Tandoori Bread",
        "items": [
            {
                "name": "Puff Roti (Spl.)",
                "price": 55,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Roti",
                "price": 40,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Roti",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kulcha",
                "price": 45,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Kulcha",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Naan",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Naan",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paratha",
                "price": 50,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Stuffed Paratha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Stuffed Kulcha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kashmiri Naan",
                "price": 110,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Garlic Naan",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pudina Kulcha",
                "price": 45,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Aloo Paratha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Paratha",
                "price": 120,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Raitha",
        "items": [
            {
                "name": "Mix Raitha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Bhoondhi Raitha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pineapple Raitha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cucumber Raitha",
                "price": 80,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Chinese Rice Items",
        "items": [
            {
                "name": "Veg Fried Rice",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Triple Fried Rice",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Schezwan Fried Rice",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Singapori Fried Rice",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Lemon Fried Rice",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Fried Rice",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Fried Rice",
                "price": 230,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Fried Rice",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Schezwan Fried Rice",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Schezwan Fried Rice",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Gobi Fried Rice",
                "price": 210,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Noodles",
        "items": [
            {
                "name": "Veg Noodles",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Schezwan Noodles",
                "price": 190,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Singapori Noodles",
                "price": 210,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Noodles",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Noodles",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Noodles",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "American Chopsuey",
                "price": 240,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Biryani Rice",
        "items": [
            {
                "name": "Veg Biryani",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Biryani",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Biryani",
                "price": 270,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Handi Biryani",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kashmiri Biryani",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mughlai Biryani",
                "price": 260,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Veg Hydrabadi Biryani",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Biryani",
                "price": 280,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Spl. Biryani",
                "price": 280,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Pulav Rice",
        "items": [
            {
                "name": "Veg Pulav",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mushroom Pulav",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Pulav",
                "price": 240,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Baby Corn Pulav",
                "price": 230,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Peas Pulav",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kaju Pulav",
                "price": 250,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Ghee Rice",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Jeera Rice",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Steem Rice",
                "price": 70,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Chats",
        "items": [
            {
                "name": "Pani Puri",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Bhelpuri",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Masala Puri",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Alu Puri",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Sev Puri",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pav Bhaji",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Papdi Chats",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dahi Puri",
                "price": 80,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Sandwich",
        "items": [
            {
                "name": "Veg Grill Sandwich",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Paneer Grill Sandwich",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cheese Grill Sandwich",
                "price": 120,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Lassi / Juice",
        "items": [
            {
                "name": "Lassi Sweet / Salt",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rose Lassi",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kesar Lassi",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mango Lassi",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Milk",
                "price": 60,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Chill Shakes",
        "items": [
            {
                "name": "Pomegranate Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Fruit Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Banana Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Black Current Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cold Coffee",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Cold Badam Milk",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chiko Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Apple Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chocolate Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Vanilla Milk Shakes",
                "price": 110,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pista Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Strawberry Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Rose Milk Shakes",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mango Milk Shakes",
                "price": 130,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Special Milk Shakes",
                "price": 140,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Fresh Fruit Juice",
        "items": [
            {
                "name": "Moosambi Juice",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Moosambi Solid",
                "price": 140,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pineapple",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Grapes",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Water Melon",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chikku",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mango",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Fresh Lime",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mixed Fruit",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pappaya",
                "price": 90,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Apple",
                "price": 100,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Orange Solid",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mint Lemon Juice",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Lime Soda",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Falooda",
                "price": 120,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Hot Beverage",
        "items": [
            {
                "name": "Coffee",
                "price": 35,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Tea",
                "price": 35,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Horlicks",
                "price": 45,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Badam Milk",
                "price": 40,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Black Tea",
                "price": 35,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Black Coffee",
                "price": 35,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Lemon Tea",
                "price": 40,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Ice Cream Scoop",
        "items": [
            {
                "name": "Vanilla",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Strawberry",
                "price": 70,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Black Current",
                "price": 60,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Mango",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Butter Scotch",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Kesar Pista",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chocolate",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Orange",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Dry Fruits",
                "price": 80,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Pineapple",
                "price": 80,
                "desc": "Authentic Udupi Style"
            }
        ]
    },
    {
        "category": "Special Ice Cream",
        "items": [
            {
                "name": "Gud Bud",
                "price": 170,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Fruits Salad",
                "price": 120,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Fruits Salad With Ice",
                "price": 160,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chocolate Fudg",
                "price": 150,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Raja Rani Special",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Honey Moon Special",
                "price": 200,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Udupi Gardenia Special",
                "price": 220,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Chocolate Almond Fudge",
                "price": 180,
                "desc": "Authentic Udupi Style"
            },
            {
                "name": "Titanic Special",
                "price": 200,
                "desc": "Authentic Udupi Style"
            }
        ]
    }
];

    const categoryImages = {
    "Breakfast": "https://loremflickr.com/800/600/breakfast,indian",
    "Combo Mini Breakfast": "https://loremflickr.com/800/600/breakfast,indian",
    "Variety Dosa": "https://loremflickr.com/800/600/dosa",
    "Today Special Dosa": "https://loremflickr.com/800/600/dosa",
    "Lunch": "https://loremflickr.com/800/600/thali",
    "Papad": "https://loremflickr.com/800/600/papad",
    "Chinese Starters": "https://loremflickr.com/800/600/samosa",
    "Soup": "https://loremflickr.com/800/600/soup",
    "Salad": "https://loremflickr.com/800/600/salad",
    "North Starters": "https://loremflickr.com/800/600/paneer",
    "Special Gravy": "https://loremflickr.com/800/600/curry",
    "North India Curry": "https://loremflickr.com/800/600/curry",
    "Tandoori Bread": "https://loremflickr.com/800/600/naan",
    "Raitha": "https://loremflickr.com/800/600/raita",
    "Chinese Rice Items": "https://loremflickr.com/800/600/friedrice",
    "Noodles": "https://loremflickr.com/800/600/noodles",
    "Biryani Rice": "https://loremflickr.com/800/600/biryani",
    "Pulav Rice": "https://loremflickr.com/800/600/rice",
    "Chats": "https://loremflickr.com/800/600/panipuri",
    "Sandwich": "https://loremflickr.com/800/600/sandwich",
    "Lassi / Juice": "https://loremflickr.com/800/600/juice",
    "Chill Shakes": "https://loremflickr.com/800/600/milkshake",
    "Fresh Fruit Juice": "https://loremflickr.com/800/600/juice",
    "Hot Beverage": "https://loremflickr.com/800/600/coffee",
    "Ice Cream Scoop": "https://loremflickr.com/800/600/icecream",
    "Special Ice Cream": "https://loremflickr.com/800/600/sundae"
};

    // Render Menu & Filters
    const menuGrid = document.getElementById('menu-grid');
    const menuFilters = document.getElementById('menu-filters');
    const searchInput = document.getElementById('menu-search');
    const noResultsMsg = document.getElementById('no-results');

    let currentFilter = sanitizeId(menuData[0].category);
    let currentSearch = '';

    function sanitizeId(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
    }

    function renderMenuCards() {
        if (!menuGrid) return;
        menuGrid.innerHTML = '';
        
        menuData.forEach((cat, catIndex) => {
            const catId = sanitizeId(cat.category);
            
            // Accordion Container
            const accordionItem = document.createElement('div');
            accordionItem.className = 'w-full border-b border-outline-variant/30 accordion-container';
            accordionItem.dataset.category = catId;
            
            // Accordion Header (Button)
            const headerBtn = document.createElement('button');
            headerBtn.className = 'w-full flex items-center justify-between py-5 text-left group accordion-header';
            headerBtn.innerHTML = `
                <h2 class="text-[22px] font-bold text-on-surface group-hover:text-primary transition-colors">${cat.category}</h2>
                <span class="material-symbols-outlined text-on-surface font-bold text-[28px] transition-transform duration-300 transform rotate-0 chevron-icon">expand_more</span>
            `;
            
            // Accordion Content (Items Wrapper)
            const contentDiv = document.createElement('div');
            // Start closed for all
            contentDiv.className = 'accordion-content overflow-hidden transition-all duration-300 max-h-0';
            
            const itemsWrapper = document.createElement('div');
            itemsWrapper.className = 'flex flex-col pb-4 gap-1';

            cat.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'menu-card flex w-full';
                card.dataset.dishname = item.name.toLowerCase();
                
                card.innerHTML = `
                    <div class="flex flex-row py-3 w-full items-center justify-between hover:bg-surface-container/30 transition-colors px-2 rounded-lg">
                        <div class="flex items-center gap-3 flex-grow pr-4">
                            <div class="w-[14px] h-[14px] border border-secondary flex items-center justify-center p-[1px] shrink-0 rounded-sm">
                                <div class="w-[8px] h-[8px] rounded-full bg-secondary"></div>
                            </div>
                            <h3 class="text-[16px] font-medium text-on-surface dish-name">${item.name}</h3>
                        </div>
                        <div class="shrink-0 text-right">
                            <span class="text-[16px] font-bold text-on-surface whitespace-nowrap">₹${item.price}</span>
                        </div>
                    </div>
                `;
                itemsWrapper.appendChild(card);
            });
            
            contentDiv.appendChild(itemsWrapper);
            accordionItem.appendChild(headerBtn);
            accordionItem.appendChild(contentDiv);
            menuGrid.appendChild(accordionItem);

            // Accordion Toggle Logic
            headerBtn.addEventListener('click', () => {
                const isClosed = contentDiv.style.maxHeight === '' || contentDiv.style.maxHeight === '0px';
                const chevron = headerBtn.querySelector('.chevron-icon');
                
                if (isClosed) {
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                    chevron.style.transform = 'rotate(180deg)';
                } else {
                    contentDiv.style.maxHeight = '0px';
                    chevron.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    function filterMenu() {
        if (!menuGrid) return;
        const accordions = document.querySelectorAll('.accordion-container');
        
        accordions.forEach(accordion => {
            const cards = accordion.querySelectorAll('.menu-card');
            let hasVisibleCards = false;
            
            cards.forEach(card => {
                const dishName = card.dataset.dishname;
                const matchesSearch = dishName.includes(currentSearch);
                
                if (matchesSearch) {
                    card.style.display = 'flex';
                    hasVisibleCards = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide the entire accordion based on search
            if (hasVisibleCards) {
                accordion.style.display = 'block';
                // If searching, auto-expand
                const contentDiv = accordion.querySelector('.accordion-content');
                const chevron = accordion.querySelector('.chevron-icon');
                if (currentSearch !== '') {
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 'px';
                    chevron.style.transform = 'rotate(180deg)';
                } else {
                    // Reset to collapsed when search is cleared
                    contentDiv.style.maxHeight = '0px';
                    chevron.style.transform = 'rotate(0deg)';
                }
            } else {
                accordion.style.display = 'none';
            }
        });

        // Check if any accordions are visible
        const visibleAccordions = Array.from(accordions).some(acc => acc.style.display !== 'none');
        if (noResultsMsg) {
            noResultsMsg.classList.toggle('hidden', visibleAccordions);
        }
    }

    // Initialize Menu
    if (menuGrid) {
        renderMenuCards();
    }

    // Search input event
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            filterMenu();
        });
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector(".material-symbols-outlined");
    
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
        htmlElement.classList.remove("dark");
    } else {
        htmlElement.classList.add("dark");
    }
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", () => {
        const isDark = htmlElement.classList.contains("dark");
        if(isDark) {
            htmlElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            updateThemeIcon("light");
        } else {
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            updateThemeIcon("dark");
        }
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            icon.innerText = "light_mode";
        } else {
            icon.innerText = "dark_mode";
        }
    }

    // IntersectionObserver for Reveal on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fadeElements = entry.target.querySelectorAll('.fade-in');
                fadeElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100);
                });
                
                if(entry.target.classList.contains('fade-in')) {
                     entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-section, .fade-in').forEach(el => {
        revealObserver.observe(el);
    });

    // Sticky Navbar & Back to Top behavior on scroll
    const header = document.getElementById('main-header');
    const headerInner = document.getElementById('header-inner');
    const backToTopBtn = document.getElementById('back-to-top');
    const bottomNav = document.getElementById('bottom-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header styling
        if (scrollTop > 50) {
            header.classList.add('shadow-md', 'bg-surface/95');
            header.classList.remove('bg-surface/90');
            headerInner.classList.remove('h-20');
            headerInner.classList.add('h-16');
        } else {
            header.classList.remove('shadow-md', 'bg-surface/95');
            header.classList.add('bg-surface/90');
            headerInner.classList.add('h-20');
            headerInner.classList.remove('h-16');
        }

        // Back to Top button
        if (scrollTop > 300) {
            backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }

        // Hide/Show bottom nav on scroll
        if (bottomNav) {
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                bottomNav.classList.add('translate-y-full');
            } else {
                bottomNav.classList.remove('translate-y-full');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // Back to top click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Trigger initial filter
    filterMenu();
    
    // Make hero elements visible immediately
    setTimeout(() => {
        const heroFade = document.querySelector('#home .fade-in');
        if(heroFade) heroFade.classList.add('visible');
    }, 100);
});
