def transform1(h):
    # 华氏温度到摄氏温度的转换公式为：摄氏温度=(华氏温度- 32)  / 1.8
    celsius_degree = (h - 32) /1.8
    print(' %.1f' % celsius_degree)

# 华氏温度转换为摄氏温度。Celsius_degree
huasiwendu = float(input('您的华氏温度是：'))
transform1(huasiwendu)