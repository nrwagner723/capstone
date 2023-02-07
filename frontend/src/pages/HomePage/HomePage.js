import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm';
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts";


let initialValues = {
  phone_number: '',
};

const HomePage = () => {

  const [products, setProducts] = useState(
    [
    {
        "position": 1,
        "product_id": "100003677",
        "title": "11/32 in. x 4 ft. x 8 ft. Rtd Southern Yellow Pine Plywood Sheathing",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_65.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_100.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_145.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_300.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_400.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_600.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-112590-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_65.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_100.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_145.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_300.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_400.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_600.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-112590-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/11-32-in-x-4-ft-x-8-ft-Rtd-Southern-Yellow-Pine-Plywood-Sheathing-112590/100003677",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100003677&store_id=2414",
        "model_number": "112590",
        "collection": "https://www.homedepot.com",
        "favorite": 5351,
        "rating": 3.8905,
        "reviews": 1251,
        "price": 22.03,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 62,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 2,
        "product_id": "100009348",
        "title": "1 in. x 2 in. x 8 ft. Furring Strip Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_65.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_100.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_145.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_300.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_400.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_600.jpg",
                "https://images.thdstatic.com/productImages/de867837-d279-410e-ae67-5252345eaaa8/svn/furring-strips-160954-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_65.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_100.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_145.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_300.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_400.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_600.jpg",
                "https://images.thdstatic.com/productImages/4ff942e6-4f18-41f3-be3c-433b445ef6aa/svn/furring-strips-160954-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/1-in-x-2-in-x-8-ft-Furring-Strip-Board-160954/100009348",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100009348&store_id=2414",
        "model_number": "160954",
        "collection": "https://www.homedepot.com",
        "favorite": 6000,
        "rating": 3.7333,
        "reviews": 660,
        "price": 1.48,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 558,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 3,
        "product_id": "203450502",
        "title": "1 in. x 2 in. x 8 ft. Select Kiln-Dried Square Edge Whitewood Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_65.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_100.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_145.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_300.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_400.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_600.jpg",
                "https://images.thdstatic.com/productImages/f3d4ee24-8b3e-40d7-beb2-ae3777cb69c8/svn/common-boards-418532-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_65.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_100.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_145.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_300.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_400.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_600.jpg",
                "https://images.thdstatic.com/productImages/4d0374ab-5df6-4219-ac26-ae2ec65dcd5c/svn/common-boards-418532-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/1-in-x-2-in-x-8-ft-Select-Kiln-Dried-Square-Edge-Whitewood-Board-418532/203450502",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=203450502&store_id=2414",
        "model_number": "418532",
        "collection": "https://www.homedepot.com",
        "favorite": 1768,
        "rating": 4.3787,
        "reviews": 404,
        "price": 7.58,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 179,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 4,
        "product_id": "100094214",
        "title": "1 in. x 3 in. x 8 ft. Furring Strip Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_65.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_100.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_145.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_300.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_400.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_600.jpg",
                "https://images.thdstatic.com/productImages/dd89a09a-bd3c-4d65-b899-fb6c8f484b73/svn/furring-strips-164704-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_65.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_100.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_145.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_300.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_400.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_600.jpg",
                "https://images.thdstatic.com/productImages/ed95e479-9475-4d20-83d8-8c64bb92efdd/svn/furring-strips-164704-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/1-in-x-3-in-x-8-ft-Furring-Strip-Board-164704/100094214",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100094214&store_id=2414",
        "model_number": "164704",
        "collection": "https://www.homedepot.com",
        "favorite": 2996,
        "rating": 3.4615,
        "reviews": 429,
        "price": 2.22,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 1375,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 5,
        "product_id": "100025396",
        "title": "4 in. x 4 in. x 10 ft. #2 Pressure-Treated Ground Contact Southern Pine Timber",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_65.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_100.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_145.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_300.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_400.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_600.jpg",
                "https://images.thdstatic.com/productImages/66a16ac2-87c4-42ea-9957-b9b13361a78d/svn/pressure-treated-lumber-4220254-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/4-in-x-4-in-x-10-ft-2-Pressure-Treated-Ground-Contact-Southern-Pine-Timber-4220254/100025396",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100025396&store_id=2414",
        "model_number": "4220254",
        "collection": "https://www.homedepot.com",
        "favorite": 6647,
        "rating": 4.261,
        "reviews": 636,
        "price": 16.28,
        "badges": [
            "top rated"
        ],
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 131,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 6,
        "product_id": "312528832",
        "title": "2 in. x 6 in. x 8 ft. #2 BTR KD-HT SPF Dimensional Lumber",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_65.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_100.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_145.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_300.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_400.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_600.jpg",
                "https://images.thdstatic.com/productImages/3a2ae1ef-be4c-4cd9-96f2-212733988075/svn/framing-lumber-058443-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/2-in-x-6-in-x-8-ft-2-BTR-KD-HT-SPF-Dimensional-Lumber-058443/312528832",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=312528832&store_id=2414",
        "model_number": "058443",
        "collection": "https://www.homedepot.com",
        "favorite": 1172,
        "rating": 3.9987,
        "reviews": 751,
        "price": 7.98,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 441,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 7,
        "product_id": "303564747",
        "title": "23/32 in. x 4 ft. x 8 ft. RTD Sheathing Syp",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_65.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_100.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_145.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_300.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_400.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_600.jpg",
                "https://images.thdstatic.com/productImages/1c22cefe-fca4-4483-afa9-11e2f7260f7b/svn/sheathing-plywood-129323-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/23-32-in-x-4-ft-x-8-ft-RTD-Sheathing-Syp-129323/303564747",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=303564747&store_id=2414",
        "model_number": "129323",
        "collection": "https://www.homedepot.com",
        "favorite": 1261,
        "rating": 4.2461,
        "reviews": 707,
        "price": 41.88,
        "badges": [
            "top rated"
        ],
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 24,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 8,
        "product_id": "100004472",
        "title": "19/32 in. x 4 ft. x 8 ft. Rtd Sheathing Syp",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_65.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_100.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_145.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_300.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_400.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_600.jpg",
                "https://images.thdstatic.com/productImages/f8d129e4-eab4-46e0-b1b0-466fd5cf6176/svn/sheathing-plywood-195482-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_65.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_100.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_145.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_300.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_400.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_600.jpg",
                "https://images.thdstatic.com/productImages/81d97dc8-8ad0-47b1-b54b-f3533dbfaf43/svn/sheathing-plywood-195482-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/19-32-in-x-4-ft-x-8-ft-Rtd-Sheathing-Syp-195482/100004472",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100004472&store_id=2414",
        "model_number": "195482",
        "collection": "https://www.homedepot.com",
        "favorite": 2518,
        "rating": 4.001,
        "reviews": 1016,
        "price": 33.3,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 66,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 9,
        "product_id": "207078140",
        "title": "1/2 in. x 4 in. x 4 ft. Weathered Hardwood Board (8-Piece)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_65.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_100.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_145.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_300.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_400.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_600.jpg",
                "https://images.thdstatic.com/productImages/4d709dca-7f38-4b1e-bd3e-ed4651bd83b1/svn/various-wood-tones-weaber-weathered-wood-27862-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-Weathered-Hardwood-Board-8-Piece-27862/207078140",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=207078140&store_id=2414",
        "model_number": "27862",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "variants": [
            {
                "title": "Various wood tones",
                "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-Weathered-Hardwood-Board-8-Piece-27862/207078140",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/5a/5a3b2130-455e-4484-bcd8-dd3f468fcc44_35.jpg"
            },
            {
                "title": "Coastal Gray Color",
                "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-Nantucket-Gray-Poplar-Weathered-Board-8-Piece-27827/303693402",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/0b/0b3a574c-c1d7-43e4-9e0e-c0605ad16b7d_35.jpg"
            },
            {
                "title": "Black",
                "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-Anthracite-Barn-Wood-Board-8-Piece-27271/311377530",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/12/1265dbc5-a47c-44aa-b8fd-bf4b4bc41e88_35.jpg"
            },
            {
                "title": "Wheat",
                "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-Wheat-Poplar-Weathered-Board-8-Piece-27831/309411662",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/09/0986e4e8-3d01-4f09-8a45-8bd7a9d49ef0_35.jpg"
            },
            {
                "title": "White Wash",
                "link": "https://www.homedepot.com/p/Weaber-1-2-in-x-4-in-x-4-ft-White-Wash-Weathered-Hardwood-Board-8-Piece-27839/301827976",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/ff/ffadb68f-0ff0-4cbe-ac33-ef701f5ac0cf_35.jpg"
            }
        ],
        "favorite": 5253,
        "rating": 4.3103,
        "reviews": 2117,
        "price": 33.99,
        "price_was": 39.9900016784668,
        "price_saving": 6.0,
        "percentage_off": 15.0,
        "price_badge": "Special-Buy",
        "badges": [
            "top rated"
        ],
        "delivery": {
            "free": true,
            "free_delivery_threshold": false
        },
        "pickup": {
            "free_ship_to_store": true
        }
    },
    {
        "position": 10,
        "product_id": "100065210",
        "title": "1 in. x 8 in. x 8 ft. Premium Kiln-Dried Square Edge Whitewood Common Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_65.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_100.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_145.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_300.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_400.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_600.jpg",
                "https://images.thdstatic.com/productImages/6c8a7156-1c92-48c2-af35-a1f8fd2a6753/svn/common-boards-914835-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_65.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_100.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_145.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_300.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_400.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_600.jpg",
                "https://images.thdstatic.com/productImages/a18475b8-82ea-4b23-9b9b-8c6e1c39a62c/svn/common-boards-914835-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/1-in-x-8-in-x-8-ft-Premium-Kiln-Dried-Square-Edge-Whitewood-Common-Board-914835/100065210",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100065210&store_id=2414",
        "model_number": "914835",
        "collection": "https://www.homedepot.com",
        "favorite": 2109,
        "rating": 3.8879,
        "reviews": 339,
        "price": 17.81,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 89,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 11,
        "product_id": "300198983",
        "title": "1 in. x 6 in. x 8 ft. Barn Wood White Shiplap Pine Board (6-Pack)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_65.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_100.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_145.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_300.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_400.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_600.jpg",
                "https://images.thdstatic.com/productImages/3be76803-5c9c-4530-9f8a-cbca78abf2e1/svn/white-ufp-edge-weathered-wood-263248-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_65.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_100.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_145.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_300.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_400.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_600.jpg",
                "https://images.thdstatic.com/productImages/3afc80b4-7bce-48e7-bd62-6ac55f24e388/svn/white-ufp-edge-weathered-wood-263248-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Barn-Wood-White-Shiplap-Pine-Board-6-Pack-263248/300198983",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=300198983&store_id=2414",
        "model_number": "263248",
        "brand": "UFP-Edge",
        "collection": "https://www.homedepot.com/collection/Building-Materials/UFP-Edge-Barnwood-White/Family-312582874?omsid=300198983",
        "variants": [
            {
                "title": "White",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Barn-Wood-White-Shiplap-Pine-Board-6-Pack-263248/300198983",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/bf/bf76db02-226f-4b5d-ab02-508ae5943705_35.jpg"
            },
            {
                "title": "Dark Brown",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-8-in-x-8-ft-Barn-Wood-Dark-Brown-Shiplap-Pine-Board-6-Pack-325829/306545074",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/61/61ba0623-6d8c-43bd-9620-39d4d1b213ea_35.jpg"
            },
            {
                "title": "Light Brown",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-8-in-x-8-ft-Barn-Wood-Light-Brown-Shiplap-Pine-Board-6-Pack-325833/306545103",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/bb/bb0b23df-a1ff-419c-abf8-ecdeb740b1de_35.jpg"
            },
            {
                "title": "Charcoal",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-8-in-x-6-ft-Barn-Wood-Charcoal-Shiplap-Pine-Board-6-Pack-326262/306545015",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/7c/7c9033a1-660c-4b98-9454-ef37dbb7713c_35.jpg"
            },
            {
                "title": "Gray",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-8-in-x-6-ft-Barn-Wood-Gray-Shiplap-Pine-Board-6-Pack-326254/306544951",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/7d/7d523f73-bba5-4bb5-a442-c76ef5806ed8_35.jpg"
            }
        ],
        "favorite": 1503,
        "rating": 3.9654,
        "reviews": 491,
        "price": 101.0,
        "unit": "package",
        "delivery": {
            "free": true,
            "free_delivery_threshold": false
        },
        "pickup": {
            "free_ship_to_store": true
        }
    },
    {
        "position": 12,
        "product_id": "100322335",
        "title": "1 in. x 12 in. x 4 ft. Pine Common Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_65.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_100.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_145.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_300.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_400.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_600.jpg",
                "https://images.thdstatic.com/productImages/0ce1dc6b-8e42-487a-bea2-c19f0f09e88d/svn/common-boards-458503-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/1-in-x-12-in-x-4-ft-Pine-Common-Board-458503/100322335",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=100322335&store_id=2414",
        "model_number": "458503",
        "collection": "https://www.homedepot.com",
        "favorite": 2365,
        "rating": 3.9242,
        "reviews": 330,
        "price": 13.36,
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 40,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 13,
        "product_id": "203552995",
        "title": "1/2 in. x 2 ft. x 4 ft. PureBond Maple Plywood Project Panel (Free Custom Cut Available)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_65.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_100.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_145.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_300.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_400.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_600.jpg",
                "https://images.thdstatic.com/productImages/42f5bda8-7c29-4918-9399-bc639da90e54/svn/columbia-forest-products-project-panels-1802-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Columbia-Forest-Products-1-2-in-x-2-ft-x-4-ft-PureBond-Maple-Plywood-Project-Panel-Free-Custom-Cut-Available-1802/203552995",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=203552995&store_id=2414",
        "model_number": "1802",
        "brand": "Columbia Forest Products",
        "collection": "https://www.homedepot.com",
        "favorite": 418,
        "rating": 4.5217,
        "reviews": 92,
        "price": 25.99,
        "delivery": {
            "free": true,
            "free_delivery_threshold": false
        },
        "pickup": {
            "free_ship_to_store": true
        }
    },
    {
        "position": 14,
        "product_id": "300803794",
        "title": "9/16 in. x 5-1/4 in. x 8 ft. Radiata Pine Nickel Gap Ship Lap Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_65.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_100.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_145.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_300.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_400.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_600.jpg",
                "https://images.thdstatic.com/productImages/4dd03007-767f-4f68-af49-cab40ba0b1f4/svn/arauco-hardwood-boards-1186659-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/ARAUCO-9-16-in-x-5-1-4-in-x-8-ft-Radiata-Pine-Nickel-Gap-Ship-Lap-Board-1186659/300803794",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=300803794&store_id=2414",
        "model_number": "1186659",
        "brand": "ARAUCO",
        "collection": "https://www.homedepot.com",
        "favorite": 1870,
        "rating": 4.4861,
        "reviews": 611,
        "price": 11.96,
        "badges": [
            "bestseller"
        ],
        "delivery": {
            "schedule_delivery": true
        },
        "pickup": {
            "quantity": 499,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 15,
        "product_id": "304529787",
        "title": "1 in. x 6 in. x 8 ft. Smoke White Charred Wood Pine Shiplap Board (4-Pack)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_65.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_100.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_145.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_300.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_400.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_600.jpg",
                "https://images.thdstatic.com/productImages/a1302d88-86b4-4349-a1a4-161e30d88e5a/svn/smoke-white-ufp-edge-weathered-wood-311588-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_65.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_100.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_145.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_300.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_400.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_600.jpg",
                "https://images.thdstatic.com/productImages/174d5b16-1f60-4eef-b83e-3e514e91c8f9/svn/smoke-white-ufp-edge-weathered-wood-311588-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Smoke-White-Charred-Wood-Pine-Shiplap-Board-4-Pack-311588/304529787",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=304529787&store_id=2414",
        "model_number": "311588",
        "brand": "UFP-Edge",
        "collection": "https://www.homedepot.com",
        "variants": [
            {
                "title": "Smoke White",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Smoke-White-Charred-Wood-Pine-Shiplap-Board-4-Pack-311588/304529787",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/17/170e5740-6b59-44d7-963a-c144897d0a3c_35.jpg"
            },
            {
                "title": "Charred Wood",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Charred-Wood-Shiplap-Pine-Board-4-Pack-291254/301767915",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/f9/f95aa9f9-9b29-4e2a-885e-a7c839738f77_35.jpg"
            },
            {
                "title": "Canyon Brown",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-8-ft-Canyon-Brown-Charred-Wood-Pine-Shiplap-Board-4-Pack-311335/304529873",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/5f/5f6170ee-fe08-4bc9-9720-e5f06ad86efa_35.jpg"
            },
            {
                "title": "Ash Gray",
                "link": "https://www.homedepot.com/p/UFP-Edge-1-in-x-6-in-x-6-ft-Ash-Gray-Charred-Wood-Pine-Shiplap-Board-4-pack-334170/306030915",
                "thumbnail": "https://images.thdstatic.com/catalog/swatchImages/35/6d/6deb6b97-86f3-4c3f-9219-112d052ef451_35.jpg"
            }
        ],
        "favorite": 631,
        "rating": 4.0864,
        "reviews": 162,
        "price": 91.86,
        "unit": "package",
        "delivery": {
            "free": true,
            "free_delivery_threshold": false
        },
        "pickup": {
            "free_ship_to_store": true
        }
    },
    {
        "position": 16,
        "product_id": "302006547",
        "title": "Poplar Board (Common: 1 in. x 6 in. x R/L; Actual: 0.75 in. x 5.5 in. x R/L)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_65.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_100.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_145.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_300.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_400.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_600.jpg",
                "https://images.thdstatic.com/productImages/bc9bcffb-1ba7-4d3e-a1a5-f74181c14115/svn/hardwood-boards-21065-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Poplar-Board-Common-1-in-x-6-in-x-R-L-Actual-0-75-in-x-5-5-in-x-R-L-21065/302006547",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=302006547&store_id=2414",
        "model_number": "21065",
        "collection": "https://www.homedepot.com",
        "favorite": 256,
        "rating": 4.339,
        "reviews": 118,
        "price": 3.77,
        "unit": "linear feet",
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 162,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 17,
        "product_id": "302006542",
        "title": "Poplar Board (Common: 1 in. x 3 in. x R/L; Actual: 0.75 in. x 2.5 in. x R/L)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_65.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_100.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_145.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_300.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_400.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_600.jpg",
                "https://images.thdstatic.com/productImages/c91dec4a-b96b-4518-babf-41aab5966e3c/svn/hardwood-boards-21055-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Poplar-Board-Common-1-in-x-3-in-x-R-L-Actual-0-75-in-x-2-5-in-x-R-L-21055/302006542",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=302006542&store_id=2414",
        "model_number": "21055",
        "collection": "https://www.homedepot.com",
        "favorite": 193,
        "rating": 4.0885,
        "reviews": 113,
        "price": 1.87,
        "unit": "linear feet",
        "badges": [
            "top rated"
        ],
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 242,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 18,
        "product_id": "202089083",
        "title": "Poplar Board (Common: 1 in. x 4 in. x R/L; Actual: 0.75 in. x 3.5 in. x R/L)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_65.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_100.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_145.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_300.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_400.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_600.jpg",
                "https://images.thdstatic.com/productImages/f44f3306-9fe5-4ad8-9608-cf9e83278c23/svn/gray-primed-boards-0018480-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Poplar-Board-Common-1-in-x-4-in-x-R-L-Actual-0-75-in-x-3-5-in-x-R-L-0018480/202089083",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=202089083&store_id=2414",
        "model_number": "0018480",
        "collection": "https://www.homedepot.com",
        "favorite": 296,
        "rating": 4.378,
        "reviews": 82,
        "price": 2.53,
        "unit": "linear feet",
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 269,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 19,
        "product_id": "207059039",
        "title": "1 in. x 12 in. x Random Length S4S Oak Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_65.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_100.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_145.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_300.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_400.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_600.jpg",
                "https://images.thdstatic.com/productImages/d1f88fdb-d3cc-4524-b9c2-f316dded1263/svn/weaber-hardwood-boards-22080-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-in-x-12-in-x-Random-Length-S4S-Oak-Board-22080/207059039",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=207059039&store_id=2414",
        "model_number": "22080",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "favorite": 366,
        "rating": 4.1963,
        "reviews": 163,
        "price": 11.96,
        "unit": "linear feet",
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 121,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 20,
        "product_id": "317521737",
        "title": "1/4 in. x 4 in. x 4 ft. Multi-Color Barn Wood Plank 30 sq. ft. (24-Pack)",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_65.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_100.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_145.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_300.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_400.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_600.jpg",
                "https://images.thdstatic.com/productImages/6703e4c2-a561-4378-a2f8-00064fcdc9b0/svn/brown-gray-purebond-weathered-wood-5817-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/PureBond-1-4-in-x-4-in-x-4-ft-Multi-Color-Barn-Wood-Plank-30-sq-ft-24-Pack-5817/317521737",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=317521737&store_id=2414",
        "model_number": "5817",
        "brand": "PureBond",
        "collection": "https://www.homedepot.com",
        "rating": 4.3333,
        "reviews": 15,
        "price": 118.0,
        "delivery": {
            "free": true,
            "free_delivery_threshold": false
        },
        "pickup": {
            "free_ship_to_store": true
        }
    },
    {
        "position": 21,
        "product_id": "207059036",
        "title": "1 in. x 6 in. x Random Length S4S Oak Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_65.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_100.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_145.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_300.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_400.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_600.jpg",
                "https://images.thdstatic.com/productImages/f98cf5f0-66b0-49d4-b59b-69f0861b4904/svn/weaber-hardwood-boards-22065-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_65.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_100.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_145.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_300.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_400.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_600.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22065-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-in-x-6-in-x-Random-Length-S4S-Oak-Board-22065/207059036",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=207059036&store_id=2414",
        "model_number": "22065",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "favorite": 167,
        "rating": 4.1782,
        "reviews": 174,
        "price": 5.94,
        "unit": "linear feet",
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 260,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 22,
        "product_id": "207059033",
        "title": "1 in. x 2 in. x Random Length S4S Oak Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_65.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_100.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_145.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_300.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_400.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_600.jpg",
                "https://images.thdstatic.com/productImages/a9fdfd76-9773-46ca-af21-d955dd22536f/svn/weaber-hardwood-boards-22050-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_65.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_100.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_145.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_300.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_400.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_600.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22050-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-in-x-2-in-x-Random-Length-S4S-Oak-Board-22050/207059033",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=207059033&store_id=2414",
        "model_number": "22050",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "favorite": 191,
        "rating": 4.5745,
        "reviews": 47,
        "price": 1.98,
        "unit": "linear feet",
        "badges": [
            "bestsellerv1"
        ],
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 227,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 23,
        "product_id": "303692478",
        "title": "1 in. x 3 in. x 2 ft. Poplar S4S Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_65.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_100.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_145.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_300.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_400.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_600.jpg",
                "https://images.thdstatic.com/productImages/d51408fa-77e7-45de-88c6-e71874511903/svn/weaber-hardwood-boards-38600-64_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-in-x-3-in-x-2-ft-Poplar-S4S-Board-38600/303692478",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=303692478&store_id=2414",
        "model_number": "38600",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "favorite": 30,
        "rating": 4.75,
        "reviews": 4,
        "price": 1.88,
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 108,
            "store_name": "Bangor",
            "distance": 0
        }
    },
    {
        "position": 24,
        "product_id": "207059035",
        "title": "1 in. x 4 in. x Random Length S4S Oak Board",
        "thumbnails": [
            [
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_65.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_100.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_145.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_300.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_400.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_600.jpg",
                "https://images.thdstatic.com/productImages/1b98e2e7-d8ae-48ac-98ed-2063de3b6a07/svn/weaber-hardwood-boards-22060-64_1000.jpg"
            ],
            [
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_65.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_100.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_145.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_300.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_400.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_600.jpg",
                "https://images.thdstatic.com/productImages/730c2d17-d647-47e5-af73-61c6de9ba4f1/svn/weaber-hardwood-boards-22060-e4_1000.jpg"
            ]
        ],
        "link": "https://www.homedepot.com/p/Weaber-1-in-x-4-in-x-Random-Length-S4S-Oak-Board-22060/207059035",
        "serpapi_link": "https://serpapi.com/search.json?delivery_zip=04401&engine=home_depot_product&product_id=207059035&store_id=2414",
        "model_number": "22060",
        "brand": "Weaber",
        "collection": "https://www.homedepot.com",
        "favorite": 161,
        "rating": 4.4337,
        "reviews": 83,
        "price": 3.96,
        "unit": "linear feet",
        "delivery": {
            "out_of_stock": true
        },
        "pickup": {
            "quantity": 431,
            "store_name": "Bangor",
            "distance": 0
        }
    }
])

  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token, getUserJobs] = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postUserInfo);
  const [productTotal, setProductTotal] = useState(0)
  const [posts, setPosts] = useState([]);

  const productsSummarizer = () => {
    const sum = products.reduce(
      (acc, currectProduct) => acc + currectProduct.price, 0 
    )
    setProductTotal(sum);
  }

  // 
  
  useEffect(() => {
    getAllPosts();
  }, [])

  async function getAllPosts(){
    const response = await axios.get('http://127.0.0.1:8000/photos/');
    setPosts(response.data)
  }

  //

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/user_info/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchUserInfo();
    getUserJobs();
  }, [token]);

  async function postUserInfo(){
    try {
        let response = await axios.post("http://127.0.0.1:8000/user_info/", formData, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        navigate("/")
    } catch (error) {
        console.log(error.message)
    }
  }
  console.log(products[0].price)
  console.log(products[1].price)
  return (
      <div className="container">
        <h1>Welcome {user.username}!</h1>
        <p>{products[0].price + products[1].price}</p>
        <button onClick={ () => {productsSummarizer()}}>Click for total</button>
        <p>{productTotal}</p>
        <DisplayPosts posts={posts}/>
      </div>
  );
};

export default HomePage;
