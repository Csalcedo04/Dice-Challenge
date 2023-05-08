# Solution of Dice Challenge proposed by https://www.appbrewery.com.

This challenge was about to use all that knowledge that I learned about the DOM and Javascript to create a dice game, where everytime the page is reload, the dices change their number and the text of the `h1` change to say what dice win or if it´s a draw . I decided to do the extramile and do all the program by the scratch, so I can improve my frontend skills.

## The target solution
![image](https://user-images.githubusercontent.com/98894266/236736328-acb3a5af-8b66-45d5-a9ef-f998cc3733d6.png)

## Colors, typography and size of text
Fonts used: https://fonts.googleapis.com/css?family=Indie+Flower|Lobster
### `background`
* `background-color: #393e46;`
### `h1` 
* `color: #4ecca3`
* `text-shadow: 5px 0 #232931;`
* `font-family: 'Lobster', cursive;`
* `font-size: 8rem;`
### `p` 
* `color: #4ecca3`
* `font-family: 'Indie Flower', cursive;`
* `font-size: 2rem;`
### `footer`
* `color: #eeeee3;`
* `font-family: 'Indie Flower', cursive;`
## Given solution
![image](https://user-images.githubusercontent.com/98894266/236742307-5248ea6c-d74b-42c2-907e-a4f59f1b88fa.png)
## Proposed front-end improvements
I saw that the page wasn't so responsive, and after the screen reaches`688px`, the size of the text of the `h1` and the width of the dices, were way to big for the screen and take a lot of space of it, so I use the following code to fix that:

```css
@media (max-width:688px  ) { 
    h1{
        font-size: 6rem;
    }
    img{
        width:  50%;
    }
    .container{
    width: 100%;
   }

```
```css
/*phone screens*/
@media (max-width:532px  ) { 
    h1{
        margin: 10.5px;
    }
    img{
        width: 30%;
    }

}
```
### And this how it looks:
#### Before `688px`
![image](https://user-images.githubusercontent.com/98894266/236748137-e10a692d-69bc-40d0-a6ad-34bbd4834bf4.png)
#### phone view
![image](https://user-images.githubusercontent.com/98894266/236750650-c762f664-1aec-4bc7-9d7a-e0e8e4964676.png)



