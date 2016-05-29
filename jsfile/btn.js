

  var sound , piano , bass , synthe , chaos ,  fun , mario , animal , geino;
  //ボタン操作
  function btn(bt){
    if(bt==piano){
      sound = 'piano';
      console.log(sound);
    }else if(bt==bass){
      sound = 'bass';
      console.log(sound);
    }else if(bt==synthe){
      sound = 'synthe';
      console.log(sound);
    }else if(bt==chaos){
      sound = 'chaos';
      console.log(sound);
    }else if(bt==fun){
      sound = 'fun';
      console.log(sound);
    }else if(bt==mario){
      sound = 'mario';
      console.log(sound);
    }else if(bt==animal){
      sound = 'animal';
      console.log(sound);
    }else if(bt==geino){
      sound = 'geino';
      console.log(sound);
    }else{
      sound = 'piano';
    }
  }

  console.log(sound);
