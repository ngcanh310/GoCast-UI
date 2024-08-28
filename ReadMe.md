  ## NOTE: (chưa hoàn thành)
    Dự án thuần html css được vừa học vừa thực hành
    Link Figma dự án https://drive.google.com/file/d/1MmuW-3oKvmHm7nTNclIjKU7c2zrxafAL/view?usp=drive_link
  ## Folder:
  ### dist:  
    1. images(chứa ảnh)
      - png: các file .png là ảnh của sidebar và topbar. Dùng chung cho tất cả các page
      - explore: chứa ảnh của riêng page explore. tương tự với home và trending, ...
    2. html(chứa file html)
    3. styles(chứa file css)
  ### sass: chứa các file scss chia 7:1
    1. abstracts: chứa css helper bao gồm biến, mixin
    2. base: Những phần css được áp dụng chung cho toàn bộ project
    3. compoments: Các thành phần có thể tái sử dụng như: button, togle, forms, ...
    4. layouts: chứa code định nghĩa cho layout của toàn project 
    5. pages: Dự án có nhiều page khác nhau. Đây là nơi định nghĩa styles cho từng page
    6. themes: Các themes của trang
    7. vendors: chứa file từ bên thứ 3 ( hiện chưa có )
  ### pug:
    1. views
     - layouts: chứa các file pug bố cục chính, tái sử dụng nhiều lần
      + dashboard: bố cục chung của các trang page
     - mixins: chứa file mixin.pug
     - module: chứa các phần nhỏ bên trong 1 page để thuận tiện cho việc quản lý, fix bug. Như trong trang page home có 8 section, từ đó trong folder home sẽ có 8 file pug con, mỗi file apug là 1 section. Tương tự đối với các trang page khác
  ### demo:
  1. Home page


to be continue ...
