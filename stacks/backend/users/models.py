from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

# user를 조작 가능
class User(AbstractUser):
    first_name=models.CharField(max_length=150,editable=False)
    last_name=models.CharField(max_length=150,editable=False)

    name=models.CharField(max_length=150)
    is_host = models.BooleanField()


# 1.모델 생성
# 2.django에 기본 user을 사용하지 않고 만든 user를 사용한다고 알려줘야함.

# models.py를 수정할때마다 migration을 만들고 migrate를 해야함 (python 코드에 있는 모델 구조와 데이터베이스의 구조를 서로 동기화하기 위함)


