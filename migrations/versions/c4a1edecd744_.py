"""empty message

Revision ID: c4a1edecd744
Revises: dbf517873beb
Create Date: 2022-10-25 02:52:17.501464

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c4a1edecd744'
down_revision = 'dbf517873beb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=480),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.String(length=480),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###