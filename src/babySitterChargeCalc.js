    var ETime=$('.entryTime').val();
    var LTime=$('.leavingTime').val();
    var cost;
    
	function calculate(){
        
		if((ETime>=17 && ETime<=22) && (LTime<=4)){
            cost=((22-ETime)*12)+(2*8)+(LTime*16);
        }
        if((ETime>=17 && ETime<22) && (LTime==22)){
            cost=(22-ETime)*12;
        }
        if((ETime==22) && (LTime==24)){
            cost=16;
        }
        /*if((ETime==24) && (LTime<=4)){
            cost=LTime*16;
        }*/
        if((ETime>=17 && ETime<=22) && (LTime==23)){
            cost=((22-ETime)*12)+((24-LTime)*8);
        }
        if((ETime>=23) && (LTime<=4)){
            cost=((24-ETime)*8)+(LTime*16);
        }
        if((ETime==23) && (LTime==24)){
            cost=(LTime-ETime)*8;
        }
        
		return cost;
                                                         
	}