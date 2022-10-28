from unittest.util import _MAX_LENGTH
# @ app에 있는 데이터의 정의나 설명을 적는 곳

from django.db import models

# Create your models here.


class House(models.Model):

    """House Model Define"""

    name = models.CharField(max_length=140)
    price_per_night = models.PositiveIntegerField(
        verbose_name="Price", help_text="양의 정수만 입력하세요")
    description = models.TextField()
    address = models.CharField(max_length=140)
    pet_allowed = models.BooleanField(
        verbose_name="verbose_name", default=True, help_text="Help Pets")
    # django가 해당 코드를 sql로 해석해 데이터베이스와 연동해준다.
    # 모든 설정 후 make migrations라는 명령어를 사용해 django가 models.py에서 만든 model를 찾게 만들어야한다.

    def __str__(self):
        return self.name
