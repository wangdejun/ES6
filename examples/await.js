static void Main(string[] args){
    Test();
    Console.WriteLine("Test End!");
    Console.ReadLine();
}

static async void Test(){
    await Test1();
    Console.WriteLine("Test1 End!");
}

static Task Test1(){
    Thread.Sleep(1000);
    Console.WriteLine("create task in test1");
    return Task.Run(() =>{
        Thread.Sleep(3000);
        Console.WriteLine("Test1");
    });
}