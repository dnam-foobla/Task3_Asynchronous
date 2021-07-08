# Asynchronous

### QUESTION 1: Bất đồng bộ trong NodeJS là gì?

Bình thường với các ngôn ngữ khác chúng ta sẽ có cơ chế đa luồng để đảm bảo xử lý nhiều tác vụ và tối ưu công việc. Tuy nhiên với JavaScript và NodeJS ta lại biết đến bất đồng bộ. Lúc này code sẽ vẫn chạy lần lượt từ trên xuống dưới do nó là thông dịch line-by-line. Tuy nhiên, nó sẽ có những lúc không đợi các dòng code i chạy xong mà cứ chạy tiếp dòng code i+1,i+2,...

### QUESTION 2: Callstack và event loop?

Callstack dĩ nhiên là một stack rồi, nó sẽ chạy code và đẩy hàm dần vào đầu stack và thực hiện. Nếu gặp hàm async nó sẽ đẩy sang Web API để thực thi (Web API cũng là một stack). Khi nào thực thi xong nó sẽ push vào trong hàng đợi sự kiện (event queue). Đến khi callstack rỗng thì các event sẽ được lấy ra ở event queue và thực thi. Việc lặp đi lặp lại này tạo thành vòng lặp và người ta gọi là event loop

### QUESTION 3: Callback Function

Callback function được truyền vào hàm như một tham số. Đơn giản vậy thôi, nó sẽ được call khi hàm execute và từ back để nhấn mạnh cho nó là hàm được gọi lại. Việc có thể callback diễn ra trong JS bởi vì trong JS thì function like object. Việc thực hiện trong hàm lại như trong event loop

### QUESTION 4: Promise

Promise ra đời giúp hạn chế được việc callback hell (khiến code như một bậc thang). Promise hỗ trợ các cơ chế như chainning, bắt lỗi dễ dàng hơn khi nếu 1 hàm bị lỗi sẽ catch luôn, tiếp theo là việc xử lý đợi tất cả các hàm async chạy xong bằng Promise.all()

### QUESTION 5: Async/await

Async await sinh ra để cải thiện thêm những bất cấp. Khi ta khai báo async nó sẽ biến hàm đó thành bất đồng bộ, khi nào ta cần đồng bộ ta sẽ gọi await để đợi các tác vụ async trước đó trong scope xử lý xong thì mới tiếp tục chạy code.
**Lưu ý: Await phải được dùng trong async

### ASSIGNMENT

Run command line

```shell
npm run test
```
to run unit test algorithm

Result:
![img]("https://github.com/dnam-foobla/Task3_Asynchronous/blob/main/test/Result.PNG")
