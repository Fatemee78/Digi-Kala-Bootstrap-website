#include <iostream>

using namespace std;

class time{
public :
    int time_h;
    int time_m;
    int time_s;
    bool pro = 0;
};
int main()

{
    bool hh= 0;
    time t;
    while(1)
    {
        cout<<"please enter the hour."<<endl;
        int h;
        cin >> h;
        if(h > 12)
            hh=true,h-= 12;
        if(h > 12 or h < 0)
        {
            cout<<"hour is between 0 and 23 \n";
            continue;
        }
        else
        {
            t.time_h=h;
            break;
        }
    }
    while(1)
    {
        cout<<"please enter the min. \n";
        int m;
        cin >> m;
        if(m > 59 or m < 0)
        {
            cout<<"min is between 0 and 59 \n";
            continue;
        }
        else
        {
            t.time_m=m;
            break;
        }
    }
    while (1)
    {
        cout<<"do you want to insert the second ? (yes/no) \n";
        string s;
        cin >>s;
        if(s=="yes")
        {
            t.pro=true;
            while(1)
            {
                cout<<"please enter the sec. \n";
                int m;
                cin >> m;
                if(m > 59 or m < 0)
                {
                    cout<<"sec is between 0 and 59 \n";
                    continue;
                }
                else
                {
                    t.time_s=m;
                    if(m==0)
                        t.pro=false;
                    break;
                }
            }
            break;
        }
        else if(s=="no")
            break;
    }
    char a = '0';
    char* b = &a;
    cout << t.time_h << " : " << t.time_m << " : " << (t.pro ? t.time_s : 0)<<(t.pro ? "" : b) <<" "<<(hh ? "pm\n" : "am\n");

    main();

}
