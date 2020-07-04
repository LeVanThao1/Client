const districts = [["Huyện Cái Bè", "Thị Xã Cai Lậy", "Huyện Cai Lậy", "Huyện Châu Thành", "Huyện Chợ Gạo", "Thị Xã Gò Công", "Huyện Gò Công Đông", "Huyện Gò Công Tây", "Huyện Tân Phú Đông", "Tỉnh Tiền Giang", "Huyện Tân Phước", "Thành Phố Mỹ Tho"], ["Huyện Ân Thi", "Huyện Khoái Châu", "Huyện Phù Cừ", "Huyện Kim Động", "Huyện Văn Giang", "Huyện Mỹ Hào", "Thị Xã Mỹ Hào", "Thành Phố Hưng Yên", "Tỉnh Hưng Yên", "Huyện Yên Mỹ", "Huyện Văn Lâm", "Huyện Tiên Lữ"], ["Huyện Đông Anh", "Quận Ba Đình", "Quận Hai Bà Trưng", "Huyện Ba Vì", "Quận Bắc Từ Liêm", "Quận Long Biên", "Quận Cầu Giấy", "Chưa rõ", "Huyện Chương Mỹ", "Quận Đống Đa", "Huyện Đan Phượng", "Quận Hà Đông", "Thị Xã Hà Đông", "Huyện Hoài Đức", "Huyện Mỹ Đức", "Huyện Gia Lâm", "Thành Phố Hà Nội", "Quận Tây Hồ", "Huyện Ứng Hoà", "Quận Hoàn Kiếm", "Quận Hoàng Mai", "Huyện Thanh Trì", "Huyện Thường Tín", "Huyện Thạch Thất", "Huyện Mê Linh", "Huyện Sóc Sơn", "Huyện Thanh Oai", "Huyện Phú Xuyên", "Huyện Phúc Thọ", "Huyện Quốc Oai", "Huyện Từ Liêm", "Quận Nam Từ Liêm", "Quận Thanh Xuân", "Thị Xã Sơn Tây"], ["Quận 1", "Quận 10", "Quận 11", "Quận 12", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Huyện Nhà Bè", "Quận Bình Tân", "Huyện Bình Chánh", "Quận Bình Thạnh", "Quận Tân Bình", "Huyện Cần Giờ", "Huyện Củ Chi", "Thành Phố Hồ Chí Minh", "Quận Thủ Đức", "Quận Gò Vấp", "Huyện Hóc Môn", "Quận Phú Nhuận", "Quận Tân Phú"], ["Huyện Thới Bình", "Thành Phố  Cà Mau", "Tỉnh Cà Mau", "Huyện Cái Nước", "Huyện Năm Căn", "Chưa rõ", "Huyện Đầm Dơi", "Huyện Ngọc Hiển", "Huyện Trần Văn Thời", "Huyện U Minh", "Huyện Phú Tân"], ["Huyện Krông A Na", "Huyện Krông Bông", "Huyện Krông Buk", "Thị Xã Buôn Hồ", "Huyện Buôn Đôn", "Huyện Cư M'gar", "Huyện Cư Kuin", "Huyện Cư Jút (hêt H.lực)", "Tỉnh Đắk Lắk", "Huyện Đắk Mil (hêt H.lực)", "Huyện Đắk Nông (hêt H.lực)", "Huyện Đắk R'Lấp (hêt H.lực)", "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp", "Huyện Krông Nô (hêt H.lực)", "Huyện Krông Pắk", "Huyện Krông Năng", "Huyện M'ĐrắK", "Huyện Lắk", "Thành PhốBuôn Ma Thuột", "Tp.buôn Ma Thuột"], ["Lô C6 - 5 Khu Công Nghiệp Hòa Xá", "Huyện Vụ Bản", "Thành Phố Nam Định", "Tỉnh Nam Định", "Huyện Giao Thuỷ", "Huyện Hải Hậu", "Huyện Nghĩa Hưng", "Huyện Nam Trực", "Huyện Ý Yên", "Huyện Xuân Trường", "Huyện Trực Ninh", "Huyện Mỹ Lộc"], ["Huyện Ba Chẽ", "Thành Phố Uông Bí", "Huyện Bình Liêu", "Huyện Hoành Bồ", "Thành Phố Móng Cái", "Thành Phố Cẩm Phả", "Huyện Cô Tô", "Huyện Đầm Hà", "Huyện Vân Đồn", "Thị Xã Đông Triều", "Thành Phố Hạ Long", "Huyện Hải Hà", "Huyện Tiên Yên", "Tỉnh Quảng Ninh", "Thị Xã  Quảng Yên"], ["Huyện Cư Jút", "Huyện Đắk R'Lấp", "Huyện Đắk Song", "Huyện Đắk Mil", "Huyện Đắk Glong", "Huyện Đắk Nông (hêt H.lực)", "Tỉnh Đắk Nông", "Huyện Tuy Đức", "Thị Xã Gia Nghĩa", "Thành Phố Gia Nghĩa", "Huyện Krông Nô"], ["Quận Cẩm Lệ", "Quận Hải Châu", "Thôn Quang Châu", "Quận Liên Chiểu", "Thành Phố Đà Nẵng", "Quận Ngũ Hành Sơn", "Huyện Hoà Vang", "Quận Thanh Khê", "Thôn Phò Nam", "Quận Sơn Trà"], ["Huyện Bình Giang", "Huyện Cẩm Giàng", "Thị Xã Chí Linh", "Thành Phố Chí Linh", "Thành Phố Hải Dương", "Tỉnh Hải Dương", "Huyện Gia Lộc", "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Kim Thành", "Huyện Thanh Miện", "Huyện Nam Sách", "Huyện Kinh Môn", "Huyện Tứ Kỳ", "Thị Xã Kinh Môn"], ["Thành Phố Tân An", "Tỉnh Long An", "Ấp Bàu Công", "Huyện Bến Lức", "Huyện Cần Giuộc", "Huyện Cần Đước", "Huyện Châu Thành", "Huyện Đức Hoà", "Huyện Đức Huệ", "Huyện Thạnh Hoá", "Huyện Mộc Hoá", "Huyện Tân Hưng", "Huyện Vĩnh Hưng", "Huyện Tân Thạnh", "Huyện Thủ Thừa", "Huyện Tân Trụ", "Thị Xã Kiến Tường"], ["Khu Phố 3", "Huyện Ba Tri", "Huyện Mỏ Cày Bắc", "Thành Phố Bến Tre", "Tỉnh Bến Tre", "Huyện Bình Đại", "Huyện Mỏ Cày Nam", "Huyện Châu Thành", "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Thạnh Phú"], ["Huyện Thanh Bình", "Thành Phố Cao Lãnh", "Huyện Cao Lãnh", "Huyện Châu Thành", "Thành Phố Sa Đéc", "Tỉnh Đồng Tháp", "Huyện  Hồng Ngự", "Huyện Tân Hồng", "Thị Xã Hồng Ngự", "Huyện Tam Nông", "Huyện Lấp Vò", "Huyện Tháp Mười", "Huyện Lai Vung"], ["Thị Xã Bình Minh", "Huyện Tam Bình", "Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít", "Huyện Vũng Liêm", "Huyện Trà Ôn", "Thành Phố  Vĩnh Long", "Tỉnh Vĩnh Long"], ["Huyện An Minh", "Huyện An Biên", "Huyện Châu Thành", "Huyện Hòn Đất", "Thành Phố Rạch Giá", "Huyện Giang Thành", "Tỉnh Kiên Giang", "Huyện Giồng Riềng", "Huyện Gò Quao", "Thị Xã Hà Tiên", "Thành Phố Hà Tiên", "Huyện Kiên Hải", "Huyện Tân Hiệp", "Huyện Phú Quốc", "Huyện Kiên Lương", "Huyện Vĩnh Thuận", "Huyện U Minh Thượng"], ["Huyện Tiểu Cần", "Huyện Càng Long", "Huyện Cầu Ngang", "Huyện Cầu Kè", "Huyện Châu Thành", "Huyện Trà Cú", "Huyện Duyên Hải", "Thị Xã Duyên Hải", "Thành Phố Trà Vinh", "Tỉnh Trà Vinh"], ["Huyện Châu Thành", "Thị Xã Vĩnh Châu", "Huyện Cù Lao Dung", "Huyện Trần Đề", "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Thạnh Trị", "Huyện Mỹ Xuyên", "Huyện Kế Sách", "Thị Xã Ngã Năm", "Thành Phố Sóc Trăng", "Tỉnh Sóc Trăng"], ["Thành Phố Bắc Ninh", "Tỉnh Bắc Ninh", "Huyện Gia Bình", "Huyện Tiên Du", "Huyện Quế Võ", "Huyện Lương Tài", "Huyện Yên Phong", "Huyện Thuận Thành", "Thị Xã Từ Sơn"], ["Số 312 Nguyễn Trãi", "Huyện Bá Thước", "Thị Xã Bỉm Sơn", "Huyện Cẩm Thuỷ", "Huyện Lang Chánh", "Huyện Nông Cống", "Huyện Yên Định", "Huyện Đông Sơn", "Huyện Tĩnh Gia", "Huyện Hà Trung", "Huyện Hậu Lộc", "Thành Phố Thanh Hoá", "Huyện Hoằng Hoá", "Huyện Thiệu Hoá", "Tỉnh Thanh Hoá", "Huyện Quan Hoá", "Huyện Quảng Xương", "Huyện Nga Sơn", "Huyện Triệu Sơn", "Huyện Thạch Thành", "Huyện Như Xuân", "Huyện Thọ Xuân", "Huyện Quan Sơn", "Huyện Thường Xuân", "Huyện Mường Lát", "Huyện Vĩnh Lộc", "Huyện Ngọc Lặc", "Huyện Như Thanh", "Thị Xã Nghi Sơn", "Thành Phố Sầm Sơn", "Thị Xã Sầm Sơn"], ["Bà Rịa", "Tỉnh Bà Rịa"], ["Thành Phố Biên Hoà", "Huyện Trảng Bom", "Huyện Cẩm Mỹ", "Huyện Vĩnh Cửu", "Huyện Định Quán", "Tỉnh Đồng Nai", "Huyện Long Thành", "Huyện Nhơn Trạch", "Huyện Tân Phú", "Huyện Xuân Lộc", "Huyện Thống Nhất", "Thị Xã Long Khánh", "Thành Phố Long Khánh"], ["Đường Số 10", "TX Thuận An", "TX Dĩ An", "Thị Xã Thuận An", "Thị Xã Dĩ An", "Thành Phố Dĩ An", "Thành Phố Thuận An", "Huyện Bắc Tân Uyên", "Huyện Bàu Bàng", "Thị Xã Bến Cát", "Tỉnh Bình Dương", "Thành Phố Thủ Dầu Một", "Huyện Dầu Tiếng", "Huyện Phú Giáo", "Thị Xã  Tân Uyên"], ["Huyện Phú Bình", "Thành Phố Sông Công", "Huyện Đại Từ", "Huyện Định Hoá", "Huyện Đồng Hỷ", "Huyện Phú Lương", "Huyện Võ Nhai", "Thành Phố Thái Nguyên", "Tỉnh Thái Nguyên", "Thị Xã Phổ Yên"], ["Thành Phố Thái Bình", "Tỉnh Thái Bình", "Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Tiền Hải", "Huyện Kiến Xương", "Huyện Thái Thụy", "Huyện Quỳnh Phụ", "Huyện Vũ Thư"], ["Huyện Châu Thành A (hêt H.lực)", "Quận Bình Thuỷ", "Quận Cái Răng", "Thành Phố Cần Thơ (hêt H.lực)", "Thành Phố Cần Thơ", "Huyện Châu Thành (hêt H.lực)", "Huyện Cờ Đỏ", "Huyện Phong Điền", "Huyện Long Mỹ (hêt H.lực)", "Huyện Phụng Hiệp (hêt H.lực)", "Huyện Thới Lai", "Huyện Vĩnh Thạnh", "Quận Ninh Kiều", "Quận Ô Môn", "Quận Thốt Nốt"], ["Tỉnh Nghệ An", "Huyện Anh Sơn", "Huyện Diễn Châu", "Huyện Quỳ Châu", "Huyện Thanh Chương", "Huyện Con Cuông", "Thị Xã Cửa Lò", "Huyện Nghĩa Đàn", "Huyện Nam Đàn", "Huyện Đô Lương", "Huyện Tương Dương", "Thị Xã Thái Hoà", "Thị Xã Hoàng Mai", "Huyện Quỳ Hợp", "Huyện Hưng Nguyên", "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Huyện Kỳ Sơn", "Huyện Quế Phong", "Huyện Yên Thành", "Huyện Nghi Lộc", "Thành Phố Vinh"], ["Thừa Thiên"], ["Thị Xã  Bình Long", "Tỉnh Bình Phước", "Huyện Bù Đốp", "Huyện Bù Đăng", "Huyện Bù Gia Mập", "Huyện Chơn Thành", "Thị Xã Đồng Xoài", "Huyện Đồng Phú", "Thành Phố Đồng Xoài", "Huyện Hớn Quản", "Hớn Quản", "Huyện Lộc Ninh", "Huyện Phú Riềng", "Thị Xã  Phước Long", "Tx Phước Long"], ["275 Phan Chu Trinh", "466 Phan Chu Trinh", "Thành Phố Hội An", "Huyện Bắc Trà My", "Thị Xã Điện Bàn", "Huyện Thăng Bình", "Huyện Đại Lộc", "Huyện Đông Giang", "Huyện Hiệp Đức", "Huyện Duy Xuyên", "Huyện Tây Giang", "Huyện Nam Giang", "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành", "Huyện Phước Sơn", "Huyện Phú Ninh", "Huyện Quế Sơn", "Huyện Tiên Phước", "Thành Phố Tam Kỳ", "Tỉnh Quảng Nam"], ["Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Trà Bồng", "Huyện Đức Phổ", "Huyện Mộ Đức", "Thị Xã Đức Phổ", "Huyện Sơn Hà", "Huyện Nghĩa Hành", "Huyện Tư Nghĩa", "Huyện Lý Sơn", "Huyện Minh Long", "Huyện Tây Trà", "Huyện Sơn Tịnh", "Huyện Sơn Tây", "Thành Phố Quảng Ngãi", "Tỉnh Quảng Ngãi"], ["Huyện Bác Ái", "Huyện Thuận Bắc", "Tháp Chàm", "Tp. Phan Rang-tháp Chàm", "Huyện Ninh Hải", "Huyện Thuận Nam", "Huyện Ninh Sơn", "Huyện Ninh Phước", "Tỉnh Ninh Thuận"], ["Huyện Bắc Hà", "Huyện Văn Bàn", "Huyện Bảo Thắng", "Huyện Bảo Yên", "Huyện Bát Xát", "Thành Phố Lào Cai", "Tỉnh Lào Cai", "Huyện Si Ma Cai", "Huyện Than Uyên (hêt H.lực)", "Huyện Sa Pa", "Huyện Mường Khương", "Thị Xã Sa Pa"], ["Quận Hải An", "Huyện An Dương", "Quận Kiến An", "Huyện An Lão", "Huyện Bạch Long Vĩ", "Quận Hồng Bàng", "Huyện Vĩnh Bảo", "Huyện Cát Hải", "Quận Lê Chân", "Quận Đồ Sơn", "Quận Dương Kinh", "Thành Phố Hải Phòng", "Huyện Thuỷ Nguyên", "Huyện Tiên Lãng", "Huyện Kiến Thuỵ", "Quận Ngô Quyền"], ["Huyện An Phú", "Tỉnh An Giang", "Ấp Long Thạnh B", "Huyện Tịnh Biên", "Thành Phố Châu Đốc", "Huyện Châu Phú", "Thị Xã Tân Châu", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Thoại Sơn", "Huyện Phú Tân", "Huyện Tri Tôn", "Thành Phố Long Xuyên"], ["Huyện Thanh Ba", "Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hoà", "Huyện Tân Sơn", "Huyện Lâm Thao", "Huyện Tam Nông", "Huyện Thanh Sơn", "Huyện Phù Ninh", "Huyện Yên Lập", "Huyện Thanh Thuỷ", "Thành Phố Việt Trì", "Thị Xã Phú Thọ", "Tỉnh Phú Thọ"], ["Huyện Trảng Bàng", "Thị Xã Trảng Bàng", "Huyện Bến Cầu", "Huyện Tân Biên", "Huyện Dương Minh Châu", "Huyện Châu Thành", "Huyện Tân Châu", "Huyện Gò Dầu", "Huyện Hoà Thành", "Thị Xã Hoà Thành", "Thành Phố Tây Ninh", "Tỉnh Tây Ninh"], ["Huyện Cam Lâm", "Thành Phố Cam Ranh", "Huyện Diên Khánh", "Thị Xã Ninh Hoà", "Tỉnh Khánh Hoà", "Huyện Vạn Ninh", "Huyện Khánh Vĩnh", "Huyện Khánh Sơn", "Huyện Trường Sa", "Thành Phố Nha Trang"], ["Số 07-lc Lý Thái Tổ", "Số 200quốc Lộ 1a", "Số 30 Lương Văn Chánh", "33 Trần Quý Cáp", "Số 68h Hùng Vương", "Số 94 Nguyễn Thị Minh Khai", "Huyện Tuy An", "Thị Xã Sông Cầu", "Huyện Đông Hoà", "Huyện Đồng Xuân", "Thị Xã Đông Hoà", "Huyện Sông Hinh", "Huyện Phú Hoà", "Thành Phố Tuy Hoà", "Huyện  Tây  Hoà", "Huyện Sơn Hoà", "Tp Tuy Hoà", "Tỉnh Phú Yên"], ["Huyện Đà Bắc", "Thành Phố Hoà Bình", "Tỉnh Hoà Bình", "Huyện Kim Bôi", "Huyện Cao Phong", "Huyện Mai Châu", "Huyện Lương Sơn", "Huyện Lạc Thuỷ", "Huyện Lạc Sơn", "Huyện Tân Lạc", "Huyện Yên Thuỷ", "Huyện Kỳ Sơn"], ["Huyện Lâm Bình", "Huyện Chiêm Hoá", "Huyện Sơn Dương", "Huyện Hàm Yên", "Huyện Na Hang", "Huyện Yên Sơn", "Thành Phố Tuyên Quang", "Tỉnh Tuyên Quang"], ["Thành Phố Lai Châu", "Tỉnh Lai Châu", "Huyện Tam Đường", "Huyện Sìn Hồ", "Huyện Mường Tè", "Huyện Than Uyên", "Huyện Nậm Nhùn", "Huyện Tân Uyên", "Huyện Phong Thổ"], ["Huyện Châu Thành A", "Thị  Xã Ngã Bảy", "Thành Phố Ngã Bảy", "Huyện Châu Thành", "Tỉnh Hậu Giang", "Huyện Phụng Hiệp", "Huyện Vị Thủy", "Huyện Long Mỹ", "Thị Xã Long Mỹ", "Thành Phố Vị Thanh", "Tp Vị Thanh"], ["Thành Phố Bảo Lộc", "Huyện Bảo Lâm", "Huyện Cát Tiên", "Thành Phố Đà Lạt", "Huyện Đạ Huoai", "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh", "Huyện Đơn Dương", "Tỉnh Lâm Đồng", "Huyện Đức Trọng", "Huyện Lạc Dương", "Huyện Lâm Hà"], ["Huyện Bắc Sơn", "Huyện Lộc Bình", "Huyện Bình Gia", "Huyện Cao Lộc", "Huyện Chi Lăng", "Huyện Tràng Định", "Huyện Đình Lập", "Huyện Hữu Lũng", "Huyện Văn Quan", "Huyện Văn Lãng", "Thành Phố Lạng Sơn", "Tỉnh Lạng Sơn"], ["Huyện Kim Bảng", "Huyện Bình Lục", "Khu Công Nghiệp Châu Sơn", "Huyện Duy Tiên", "Thị Xã Duy Tiên", "Tỉnh Hà Nam", "Huyện Thanh Liêm", "Huyện Lý Nhân", "Thành Phố Phủ Lý"], ["Huyện Ba Bể", "Thành Phố Bắc Cạn", "Tỉnh Bắc Cạn", "Huyện Bạch Thông", "Huyện Chợ Mới", "Huyện Chợ Đồn", "Huyện Na Rì", "Huyện Pác Nặm", "Huyện Ngân Sơn"], ["Huyện Hoài Ân", "Thị Xã An Nhơn", "Huyện An Lão", "Tỉnh Bình Định", "Huyện Vân Canh", "Huyện Phù Cát", "Khu Cn Long Mỹ", "Huyện Hoài Nhơn", "Thị Xã Hoài Nhơn", "Huyện Phù Mỹ", "Huyện Tuy Phước", "Huyện Tây Sơn", "Huyện Vĩnh Thạnh", "Thành Phố Quy Nhơn"], ["Huyện Hoà An", "Huyện Thạch An", "Thành Phố Cao Bằng", "Tỉnh Cao Bằng", "Huyện Bảo Lạc", "Huyện Bảo Lâm", "Huyện Nguyên Bình", "Huyện Hà Quảng", "Huyện Hạ Lang", "Huyện Phục Hoà", "Huyện Quảng Hòa", "Huyện Trà Lĩnh", "Huyện Quảng Uyên", "Huyện Thông Nông", "Huyện Trùng Khánh"], ["Huyện Bắc Yên", "Huyện Mộc Châu", "Huyện Thuận Châu", "Huyện Yên Châu", "Huyện Sốp Cộp", "Huyện Vân Hồ", "Huyện Mai Sơn", "Huyện Quỳnh Nhai", "Huyện Phù Yên", "Huyện Mường La", "Huyện Sông Mã", "Thành Phố Sơn La", "Tỉnh Sơn La", "Tp. Sơn La"], ["Thị Xã Ba Đồn", "Tỉnh Quảng Bình", "Huyện Bố Trạch", "T.lộc Đại", "Thành Phố Đồng Hới", "Thôn Đồng Giang", "Huyện Tuyên Hoá", "Huyện Minh Hoá", "Huyện Lệ Thuỷ", "Huyện Quảng Ninh", "Huyện Quảng Trạch"], ["Huyện Cam Lộ", "Huyện Đảo Cồn Cỏ", "Huyện Đa Krông", "Thành Phố Đông Hà", "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hoá", "Huyện Vĩnh Linh", "Huyện Triệu Phong", "Thị Xã Quảng Trị", "Tỉnh Quảng Trị"], ["14 Thống Nhất", "17 Lê Hồng Phong", "Số 38 Trần Cao Vân", "Tổ 5", "54 Huỳnh Thúc Kháng", "778 Phạm Văn Đồng", "Thị Xã An Khê", "Thị Xã Ayun Pa", "Huyện Kông Chro", "Huyện Chư Pưh", "Huyện Chư Prông", "Huyện Chư Sê", "Huyện Chư Păh", "Huyện Đức Cơ", "Huyện Đak Đoa", "Huyện ĐakPơ", "Tỉnh Gia Lai", "Huyện Ia Grai", "Huyện Kbang", "Huyện Krông Pa", "Huyện IaPa", "Huyện Phú Thiện", "Huyện Mang Yang", "Huyện Ia Pa", "Thành Phố  Pleiku"], ["Số 104/2 Đường Lê Lai", "Số 350 Đường Lê Lợi", "Số 363 Đường Lê Lợi", "Số 364 Đường Xương Giang", "Cụm 5", "Số 95 Liên Hương", "Đường Á Lữ", "Thành Phố  Bắc Giang", "Tỉnh Bắc Giang", "Huyện Sơn Động", "Thôn Trung Đồng", "Huyện Yên Dũng", "Đường Ngô Gia Tự", "Huyện Lạng Giang", "Huyện Hiệp Hoà", "Huyện Việt Yên", "Huyện Lục Nam", "Huyện Yên Thế", "Huyện Lục Ngạn", "Huyện Tân Yên"], ["Thị Xã Kỳ Anh", "Huyện Kỳ Anh", "Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ", "Thành Phố Hà Tĩnh", "Huyện Thạch Hà", "Huyện Lộc Hà", "Tỉnh Hà Tĩnh", "Thị Xã Hồng Lĩnh", "Huyện Hương Sơn", "Huyện Hương Khê", "Huyện Nghi Xuân", "Huyện Vũ Quang"], ["Thành Phố Ninh Bình", "Tỉnh Ninh Bình", "Thành Phố Tam Điệp", "Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn", "Huyện Yên Mô", "Huyện Nho Quan", "Huyện Yên Khánh"], ["Huyện Hàm Thuận Bắc", "Huyện Bắc Bình", "Tỉnh Bình Thuận", "Huyện Đức Linh", "Thị Xã La Gi", "Huyện Hàm Thuận Nam", "Huyện Hàm Tân", "Huyện Tuy Phong", "Huyện Tánh Linh", "Huyện Phú Quý", "Thôn Lương Trung", "Thành Phố  Phan Thiết"], ["Huyện Đák Hà", "Huyện Đắk Tô", "Huyện Đắk Glei", "Huyện Ia H'Drai", "Huyện Ngọc Hồi", "Huyện Kon Plông", "Huyện Kon Rẫy", "Huyện  Tu Mơ Rông", "Huyện Sa Thầy", "Thành Phố Kon Tum", "Tỉnh Kon Tum"], ["Huyện Bình Xuyên", "Huyện Mê Linh (Chuyển Hà Nội)", "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Yên Lạc", "Huyện Vĩnh Tường", "Huyện Lập Thạch", "Huyện Sông Lô", "Thành Phố Vĩnh Yên", "Thành Phố Phúc Yên", "Thị Xã Phúc Yên", "Tỉnh Vĩnh Phúc"], ["Thành Phố Bạc Liêu", "Tỉnh Bạc Liêu", "Huyện Hoà Bình", "Huyện Hồng Dân", "Huyện Đông Hải", "Thị Xã Giá Rai", "Huyện Phước Long", "Huyện Vĩnh Lợi"], ["Thành Phố  Yên Bái", "Tỉnh Yên Bái", "Huyện Yên Bình", "Huyện Mù Cang Chải", "Huyện Văn Chấn", "Huyện Văn Yên", "Huyện Trấn Yên", "Huyện Lục Yên", "Huyện Trạm Tấu", "Thị Xã Nghĩa Lộ"], ["Huyện Mường Ảng", "Huyện Điện Biên", "Thành Phố Điện Biên Phủ", "Huyện Điện Biên Đông", "Tỉnh Điện Biên", "Tp Điện Biên Phủ", "Huyện Mường Chà", "Huyện Tủa Chùa", "Huyện Tuần Giáo", "Huyện Nậm Pồ", "Huyện Mường Nhé", "Thị Xã Mường Lay"], ["Huyện Quản Bạ", "Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Quang Bình", "Huyện Đồng Văn", "Thành Phố Hà Giang", "Tỉnh Hà Giang", "Tp Hà Giang", "Huyện Hoàng Su Phì", "Huyện Vị Xuyên", "Huyện Xín Mần", "Huyện Yên Minh", "Huyện Mèo Vạc"]];
        function loadProvinces() {
            const provinces = [
                {
                    "ID": 1,
                    "Title": "Tiền Giang"
                },
                {
                    "ID": 2,
                    "Title": "Hưng Yên"
                },
                {
                    "ID": 3,
                    "Title": "Hà Nội"
                },
                {
                    "ID": 4,
                    "Title": "TP Hồ Chí Minh"
                },
                {
                    "ID": 5,
                    "Title": "Cà Mau"
                },
                {
                    "ID": 6,
                    "Title": "Đắc Lắc"
                },
                {
                    "ID": 7,
                    "Title": "Nam Định"
                },
                {
                    "ID": 8,
                    "Title": "Quảng Ninh"
                },
                {
                    "ID": 9,
                    "Title": "Đắk Nông"
                },
                {
                    "ID": 10,
                    "Title": "Đà Nẵng"
                },
                {
                    "ID": 11,
                    "Title": "Hải Dương"
                },
                {
                    "ID": 12,
                    "Title": "Long An"
                },
                {
                    "ID": 13,
                    "Title": "Bến Tre"
                },
                {
                    "ID": 14,
                    "Title": "Đồng Tháp"
                },
                {
                    "ID": 15,
                    "Title": "Vĩnh Long"
                },
                {
                    "ID": 16,
                    "Title": "Kiên Giang"
                },
                {
                    "ID": 17,
                    "Title": "Trà Vinh"
                },
                {
                    "ID": 18,
                    "Title": "Sóc Trăng"
                },
                {
                    "ID": 19,
                    "Title": "Bắc Ninh"
                },
                {
                    "ID": 20,
                    "Title": "Thanh Hoá"
                },
                {
                    "ID": 21,
                    "Title": "Vũng Tàu"
                },
                {
                    "ID": 22,
                    "Title": "Đồng Nai"
                },
                {
                    "ID": 23,
                    "Title": "Bình Dương"
                },
                {
                    "ID": 24,
                    "Title": "Thái Nguyên"
                },
                {
                    "ID": 25,
                    "Title": "Thái Bình"
                },
                {
                    "ID": 26,
                    "Title": "Cần Thơ"
                },
                {
                    "ID": 27,
                    "Title": "Nghệ An"
                },
                {
                    "ID": 28,
                    "Title": "Huế"
                },
                {
                    "ID": 29,
                    "Title": "Bình Phước"
                },
                {
                    "ID": 30,
                    "Title": "Quảng Nam"
                },
                {
                    "ID": 31,
                    "Title": "Quảng Ngãi"
                },
                {
                    "ID": 32,
                    "Title": "Ninh Thuận"
                },
                {
                    "ID": 33,
                    "Title": "Lào Cai"
                },
                {
                    "ID": 34,
                    "Title": "Hải Phòng"
                },
                {
                    "ID": 35,
                    "Title": "An Giang"
                },
                {
                    "ID": 36,
                    "Title": "Phú Thọ"
                },
                {
                    "ID": 37,
                    "Title": "Tây Ninh"
                },
                {
                    "ID": 38,
                    "Title": "Khánh Hòa"
                },
                {
                    "ID": 39,
                    "Title": "Phú Yên"
                },
                {
                    "ID": 40,
                    "Title": "Hòa Bình"
                },
                {
                    "ID": 41,
                    "Title": "Tuyên Quang"
                },
                {
                    "ID": 42,
                    "Title": "Lai Châu"
                },
                {
                    "ID": 43,
                    "Title": "Hậu Giang"
                },
                {
                    "ID": 44,
                    "Title": "Lâm Đồng"
                },
                {
                    "ID": 45,
                    "Title": "Lạng Sơn"
                },
                {
                    "ID": 46,
                    "Title": "Hà Nam"
                },
                {
                    "ID": 47,
                    "Title": "Bắc Cạn"
                },
                {
                    "ID": 48,
                    "Title": "Bình Định"
                },
                {
                    "ID": 49,
                    "Title": "Cao Bằng"
                },
                {
                    "ID": 50,
                    "Title": "Sơn La"
                },
                {
                    "ID": 51,
                    "Title": "Quảng Bình"
                },
                {
                    "ID": 52,
                    "Title": "Quảng Trị"
                },
                {
                    "ID": 53,
                    "Title": "Gia Lai"
                },
                {
                    "ID": 54,
                    "Title": "Bắc Giang"
                },
                {
                    "ID": 55,
                    "Title": "Hà Tĩnh"
                },
                {
                    "ID": 56,
                    "Title": "Ninh Bình"
                },
                {
                    "ID": 57,
                    "Title": "Bình Thuận"
                },
                {
                    "ID": 58,
                    "Title": "Kon Tum"
                },
                {
                    "ID": 59,
                    "Title": "Vĩnh Phúc"
                },
                {
                    "ID": 60,
                    "Title": "Bạc Liêu"
                },
                {
                    "ID": 61,
                    "Title": "Yên Bái"
                },
                {
                    "ID": 62,
                    "Title": "Điện Biên"
                },
                {
                    "ID": 63,
                    "Title": "Hà Giang"
                }
            ];
            provinces.forEach(province => {
                $('#provinces').append(
                    `<option value="${province.ID}" data-name="${province.Title}">${province.Title}</option>`
                )
            });
        }
        $(document).ready(function () {
            loadProvinces();
            $('#provinces').change(function (event) {
                $('#district').empty().append(`<option value="">Quận / Huyện</option>`);
                console.log($('#provinces').val());
                if ($('#provinces').val() != '') {
                    districts[+$('#provinces').val() - 1].forEach(district => {
                        $('#district').append(
                            `<option value="${district}" data-name="${district}">${district}</option>`
                        );
                    })
                }
            })
        })