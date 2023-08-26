# NOTE: 
  ## Folder
   ### disk: chứa folder images(chứa ảnh), html(chứa file html), styles(chứa file css)
    #### images: chứa ảnh
      - png: các file png là ảnh của sidebar và topbar. Dùng chung cho tất cả các page
      - explore: chứa ảnh của page explore. tương tự với home và trending, ...
   ## sass: chứa các file scss chia 7:1
   ## pug:
    -views
    - layouts: chứa các file pug chính, tái sử dụng nhiều lần
      + dashboard: bố cục chung của các trang page
    - mixins: chứa file mixin.pug
    - module: chứa các phần nhỏ bên trong 1 page để thuận tiện cho việc quản lý, fix bug. như trang page home có 8 section, trong folde home có 8 file pug con.
to be continue ...
