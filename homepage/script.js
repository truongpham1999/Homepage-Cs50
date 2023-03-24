function img_moving(direction)
{
    img = document.querySelector("#img-move");
    img_src = img.getAttribute("src");
    img_num = parseInt(img_src.split("/")[1].split(".")[0]);
    // img_num = Number.parseInt(img_src[7]);

    let temp_img;
    if(direction == 'right')
    {
        temp_img = (img_num + 1) % 3;
    }
    else if(direction == 'left')
    {
        temp_img = (img_num -1 + 3) % 3;
    }

    img.setAttribute("src", `images/${temp_img}.jpg`);
}

function hobbies_guessing()
{
    let input = document.querySelector("#guess");
    let noti = document.querySelector("#noti_message");
    let input_lower = input.value.toLowerCase();

    if (input_lower == "esport")
    {
        noti.innerHTML = "Correct!";
        noti.style.color = "#4FD4B6";
    }
    else
    {
        noti.innerHTML = "Incorrect!";
        noti.style.color = "#DA0D26";
    }
}

