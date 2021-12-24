var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Dhruvi Patel", "Haley Patel", "Bhumi Patel", "Kinjal Patel"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = ["https://i.postimg.cc/qqyYvVbq/grandpa.jpg"];
    
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Dhruvi Patel"] ;
   
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    
}
{
  i++;
  var numbers_of_family_member_in_array = 4
  if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
  
  //Debug the code to store list of images in updatedImage. Use images[i]
  var imge = ["https://i.postimg.cc/wjMnFtMX/father.jpg"];
  
  //Debug the code to store list of names in updatedName. Use names[i]
  var name1 = ["Haley Patel"] ;
 

  document.getElementById("family_member_image").src = img;
  document.getElementById("family_member_name").innerHTML = name1;
  
}
{
  i++;
  var numbers_of_family_member_in_array =4
  if(i>numbers_of_family_member_in_array)
  {
    i=0;
  }
  var img2 =["https://i.postimg.cc/5ymDKL83/bro.jpg"];
  var name2=["Bhumi Patel"];
  document.getElementById("family_member_image").src=img;
  document.getElementById("family_mamber_name").innerHTML= name2
}
{
  i++;
  var number_of_family_member_in_array=4
  if(i>number_of_family_member_in_array)
{
  i+0;
}
var img3 =["https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var name3=["Kinjal Patel"];
document.getElementById("fmaily_member_image").src=img;
document.getElementById("family_member_name").innerHTML= name3;
}
